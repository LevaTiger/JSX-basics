import { useState } from "react"
import { backButtonStyle, goBack, paddingStyle } from "../../features/goBackBtn"
import FormsTwo from "./FormsTwi";
import Login from "./Login";

const Forms=()=>{

    const border={
        border:'1px solid black',
        padding:'1rem'
    }
    const p2={
        paddingBottom:'2rem'
    }

    const [inputs, setInputs] = useState({});

    const handleChange=(event)=>{
        const name= event.target.name;
        const value = event.target.value;

        setInputs(values=>({...values, [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }


    return(
        <div className="container" style={paddingStyle}>
            <div style={backButtonStyle} onClick={goBack}>Back</div>
        <h1>Form elemek használata</h1>


            <div style={p2}>

                {/* <form style={border} onSubmit={handleSubmit}>
                    <label htmlFor="enter-name">Írja be a nevét</label>
                    <input 
                        type="text" 
                        id="enter-name"
                        value={inputs.username || ""}
                        onChange={handleChange}
                        name="username"
                    />

                    <label htmlFor="age">Enter your age</label>
                    <input type="number" name="age" id="age" value={inputs.age || ""} />
                    
                    <input type="submit" />
                </form> */}

            </div>
            <div style={p2}>
             <FormsTwo />

            </div>
            <div style={p2}>
                    <h2>Bejelentkezés</h2>
                    <Login />
            </div>
        </div>
    )
}

export default Forms;