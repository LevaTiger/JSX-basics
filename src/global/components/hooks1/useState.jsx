import { useState } from "react"

const UseState=()=>{

    const [color, setColor]= useState('red');
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    //ehelyett használhatunk egy objektumot egy állapotváltozón belül:
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

    const updateColor =()=>{
        setCar(oldObj=>({...oldObj, color: 'blue'}))
    }

    return(
        <div>
            <h2>useState:</h2>
            <p><u>color</u> és <u>setColor</u></p>
            <p><b>My favourite color is: {color}</b></p>
            <button onClick={()=> setColor('blue')}>
                Blue
            </button>
            <hr />
            <h2>Multiple states:</h2>
            <h3>My {brand}</h3>
            <p>It is a {color} {model} from {year}.</p>
            <hr />
            <h3>My {car.brand}</h3>
            <p>
                It is a {car.color} {car.model} from {car.year}. 
            </p>
            <button type="button" onClick={updateColor}>Change Blue</button>
        </div>
    )
}
export default UseState;