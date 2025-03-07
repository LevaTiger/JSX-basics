import { useState } from "react"
import { backButtonStyle, goBack, paddingStyle, pColorBlue } from "../../features/goBackBtn"
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
                    
                    <Login />
                    <hr />
                    <p>Code:</p>
                    <p style={pColorBlue}>{`    const [isLoggedIn, setIsLoggedIn] =useState(false)
                        const [loginData, setLoginData] = useState({
                            username: '',
                            password: ''
                        })`}
                    </p>
                    <p style={pColorBlue}>
                        {`
                            const registeredUser={
                                username: 'teszt',
                                password:'teszt123'
                            }
                        `}
                    </p>
                    <p style={pColorBlue}>
                        {`    const handleLoginChange =(event)=>{
                            const name = event.target.name;
                            const value = event.target.value;
                            setLoginData(values=>({...values, [name]:value}));
                        }`}
                    </p>
                    <p style={pColorBlue}>
                        {`    const handleLoginSubmit = (event)=>{
                                    event.preventDefault(); 
                                const user= {username: loginData.username, password: loginData.password}
                                console.log(loginData)
                                if(user.username === registeredUser.username && user.password === registeredUser.password){
                                    setIsLoggedIn(true)
                                    console.log('Sikeresen bejelentkezve: isLoggedIn: $ {isLoggedIn}')
                                }
                                else{
                                    console.log('Sikertelen bejelentkezés: isLoggedIn: $ {isLoggedIn}')
                                }
                            }
                        `}
                    </p>
                    <p style={pColorBlue}>
                        {
                               ` const handleLogout=()=>{
                                    setIsLoggedIn(false)
                                    console.log('Kijelentkeztél')
                                }`
                        }
                    </p>
                   
            </div>
        </div>
    )
}

export default Forms;