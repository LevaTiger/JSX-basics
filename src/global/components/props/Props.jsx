import { backButtonStyle, goBack, paddingStyle } from "../../features/goBackBtn"
import Car from "./Car";

const Props =()=>{

    const codeStyle = {
        backgroundColor: "#1d1d1d",
        color: "rgb(255, 225, 0)",
        width: "250px",
        height: "250px",
        padding: '1rem'
    }

    const cars ={
        brand: "BMW",
        model: "M3"
    }

    const goCarsEasy = ()=>{
        window.location.assign('/props/carseasy')
    }

    
    
    return(
        <div style={paddingStyle} className="container">
            <div style={backButtonStyle} onClick={goBack}>Back</div>
            <h2>Props</h2>
            <Car brand={cars.brand} model={cars.model} />
            {/* <Car brand="Mercedes" />
            <Car brand="Ford" /> */}
            <h3>Működési elve:</h3>
            <p>A 'Car' komponensnek prop ként bármit megadhatunk, pl:</p>
            <p><b>{`<Car brand="Ford" />`}</b></p>
            <p>Ezt így most ezen a szülő komponensen belül adtuk át a 'Car' gyerek komponensnek!</p>
            <h3>A gyerek komponens tartalma viszont:</h3>
            <p style={codeStyle}>{`const Car=(props)=>{ return( <div> <p>I am a {props.brand} fan!</p></div> )} export default Car;`}</p>

            <button onClick={goCarsEasy}>CarsEasy Props</button>
        </div>
    )
}



export default Props;