import { backButtonStyle, goBack, paddingStyle } from "../../features/goBackBtn"



const SpreadOperator =()=>{

    //a (...) spread operator ami gyakorlatilag 3 pont, lehetővé teszi,
    // hogy egy tömb vagy objektum egész vagy részleges adatait kibontsuk ezzel megtartva őket

    const numbersOne = [1,2,3];
    const numbersTwo = [4,5,6];
    const numbersCombined =[...numbersOne, ...numbersTwo];

    // itt is ki lehet bontani egy tetszőleges váltózóval ami itt a "rest", de ez lehetne
    //maradék is akár, vagy bármilyen szó. A Lényeg a "...", azaz a 3db pontban van, ami kibontja a maradékot
    const numbers = [1,2,3,4,5,6];
    const [one, two, ...rest] = numbers;
    // console.log(one, two, rest)

    const myVehicle ={
        brand: 'Ford',
        model: 'Mustang',
        color: 'red'
    }
    const updateMyVehicle ={
        type: 'car',
        year: '2021',
        color: 'yellow'
    }
    // FONTOS! Itt minden ami új azt hozzáadja, a régit viszont felülírja! Itt a régi prop a color ami eredetileg red, de itt már yellow lesz.

    const updatedVehicle = {...myVehicle, ...updateMyVehicle}
    console.log(updatedVehicle)

    

    return(
        <div style={paddingStyle} className="container">
            <div style={backButtonStyle} onClick={goBack}>Back</div>
            <h4>Spread Operator használata az előző adatokat megtartva: </h4>
            <p><u>const numbersOne </u> =<span>{` [${numbersOne}]`}</span></p>
            <p><u>const numbersTwo </u> =<span>{` [${numbersTwo}]`}</span></p>
            <p><u>const numbersCombined</u> =<span>{`[...numbersOne, ...numbersTwo]`}</span></p>
            <p><u>const numbersCombined </u> =<span>{`[${numbersCombined}]`}</span></p>
            <h4>Objektumokon is használható:</h4>
        </div>
    )
}


export default SpreadOperator;