import { useState } from "react";
import { backButtonStyle, goBack, paddingStyle } from "../../features/goBackBtn"



const TernaryOperator =()=>{

    //ezt írd át true vagy false-ra és működni fog a ternary operator

    const gradientText = {
        background: 'linear-gradient(to right, purple, orange)',
        backgroundClip: 'text',
        color: 'rgba(0, 0, 0, 0)'
    }

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const changeLogin=()=>{
        if(isLoggedIn === true){
            setIsLoggedIn(false)
        }
        else if (isLoggedIn == false){
            setIsLoggedIn(true)
        }
    }

    

    return(
        <div style={paddingStyle} className="container">
            <div style={backButtonStyle} onClick={goBack}>Back</div>
            <h3>Ternary Operator - Ternáris Operátor</h3>
            <p>Azt jelenti, hogy "háromágú operátor"</p>
            <h3>Szintaxisa:</h3>
            <p>feltétel ? {`<kifejezés ha igaz>`} : {`<kifejezés ha hamis>`}</p>
            <h3>Példa:</h3>
            <p>Ha isLoggedIn változó értéke TRUE, akkor megjelenik a BEJELENTKEZVE elem. Ha FALSE, akkor a jelentkezz be jelenik meg</p>
            {
                //Itt látható a ternary operator működésben:
                isLoggedIn ? renderLogged() : renderLogin()
            }
            <button onClick={changeLogin}>Login/Logout</button>
            <h2 style={gradientText}>GradientText is on!</h2>
        </div>
    )
}

const renderLogged = ()=>{

    const styleLogin= {
        color: 'green'
    }
    console.log('siker')
    return(
        <h3 style={styleLogin}>BEJELENTKEZVE</h3>
    )
}

const renderLogin = ()=>{
    const styleFail ={
        color: 'red'
    }
    console.log('sikertelen')
    return(
        <h3 style={styleFail}>Jelentkezz be!</h3>
    )
}
export default TernaryOperator;