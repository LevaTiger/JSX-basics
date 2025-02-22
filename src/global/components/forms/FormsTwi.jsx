import { useState } from "react"

const FormsTwo =()=>{

    const border={
        border:'1px solid black',
        padding:'1rem'
    }

    const [inputValues, setInputValues] = useState({
            username: '',
            age: '',
            city:''
        })

    const handleChange=(event)=>{

        const name = event.target.name;
        const value = event.target.value;
        setInputValues(values=>({...values,[name]:value} ))
    }
    
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const newUser= {username: inputValues.username, age: inputValues.age, city: inputValues.city};

        const response = await fetch('/assets/usersData',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        if(response.ok){
            const data =await response.json();
            console.log(data)
        } else {
            console.error('Hiba történt a felhasználó hozzáadása során')
        }
    }

    return(
        <div style={border}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    name="username"
                    value={inputValues.username}
                    onChange={handleChange}
                />

                <label htmlFor="age">Age</label>
                <input 
                    type="number"
                    id="age"
                    name="age"
                    value={inputValues.age}
                    onChange={handleChange}
                />

                <label htmlFor="city">City/Village</label>
                <input 
                    type="text"
                    id="city"
                    name="city"
                    value={inputValues.city}
                    onChange={handleChange}
                />

                <button type="submit">Beküldés</button>
            </form>
            <div>
                <h3>FormOutput:</h3>
                <ul>
                    <li>{inputValues.username}</li>
                    <li>{inputValues.age}</li>
                    <li>{inputValues.city}</li>
                </ul>
            </div>
        </div>
    )
}

export default FormsTwo;