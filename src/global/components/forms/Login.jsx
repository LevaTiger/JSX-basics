import { useState } from 'react';
import './login-form.css'
const Login =()=>{
    const [isLoggedIn, setIsLoggedIn] =useState(false)
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const registeredUser={
        username: 'teszt',
        password:'teszt123'
    }

 
    
    const handleLoginChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setLoginData(values=>({...values, [name]:value}));
    }
    const handleLoginSubmit = (event)=>{
        event.preventDefault();
        const user= {username: loginData.username, password: loginData.password}
        console.log(loginData)
        if(user.username === registeredUser.username && user.password === registeredUser.password){
            setIsLoggedIn(true)
            console.log(`Sikeresen bejelentkezve: isLoggedIn: ${isLoggedIn}`)
        }
        else{
            console.log(`Sikertelen bejelentkezés: isLoggedIn: ${isLoggedIn}`)
        }
    }

    const handleLogout=()=>{
        setIsLoggedIn(false)
        console.log('Kijelentkeztél')
    }

   
    return(
        <div className='login-form'>
            <h2>Bejelentkezés</h2>
            <form onSubmit={handleLoginSubmit}>
                <div className="login-input">
                    <label htmlFor="username">Felhasználónév: </label>
                    <input 
                        onChange={handleLoginChange} 
                        type="text" 
                        id="username" 
                        name='username' 
                        value={loginData.username} />
                </div>
                <div className="login-input">
                    <label htmlFor="password" >Jelszó: </label>
                    <input 
                        onChange={handleLoginChange} 
                        type="password" 
                        id="password" 
                        name='password'
                        value={loginData.password} />
                </div>
                <button type="submit">Bejelentkezés</button>
            </form>
            {isLoggedIn===true ? 
            <div>
                <h2>Bejelentkezve</h2>
                <button onClick={handleLogout} type="button">Kijelentkezés</button>
                <img  width={'200px'} src="https://img.freepik.com/premium-photo/monkey-thumbs-up-transparent-background_308643-2222.jpg?w=2000" alt="monkey thumbs up" />
            </div>
            : 
            <></>}
        </div>
    )
}

export default Login;