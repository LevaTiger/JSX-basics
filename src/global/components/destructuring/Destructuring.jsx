import { goBack, backButtonStyle, paddingStyle } from "../../features/goBackBtn";



const txtsizeSM ={
    fontSize : '40px'
}


const Destructuring =()=>{
    //old way of destructuring arrays:
    const fruits = ['apple', 'banana', 'grapes', 'orange']
    
    //index által kibontjuk
    const red = fruits[0];
    const yellow = fruits[1];
    const green = fruits[2]
    const orange = fruits[3];
    
    // console.log(`red: ${red}`)
    // console.log(`yellow: ${yellow}`)
    // console.log(`green: ${green}`)
    // console.log(`orange: ${orange}`)
    
    //also works like this:
    // const [rd, ylw, grn, rng] = fruits;
    
    // console.log(rd)
    // console.log(ylw)
    // console.log(grn)
    // console.log(rng)
    
    const calculate= (a, b)=>{
        const add = a+ b;
        const subtract = a-b;
        const multiply = a*b;
        const divide = a/b;

        return [add, subtract, multiply, divide]
    }
    const [add, subtract, multiply, divide] = calculate(4,2)
    console.log(`4+2 is ${add}`)
    console.log(`4-2 is ${subtract}`)
    console.log(`4x2 is ${multiply}`)
    console.log(`4/2 is ${divide}`)

    //destructuring objects in a function old - objektumok kicsomagolása egy függvénnyel régi mód
    const vehicleOne ={
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: '2021',
        color: 'red'
    }
    
    const myVehicle =(vehicle)=>{
        const message = 'My ' +vehicle.type + ' is a ' + vehicle.color+ ' ' +vehicle.brand + ' ' +vehicle.model + '.';
        console.log(message)
    }
    myVehicle(vehicleOne);

    //using an object in a function NEW MODE / egy objektum használata egy függvényen belül DESTRUCTURING-el

    const vehicleTwo ={
        brand: 'Shelby',
        model: 'Cobra',
        type: 'car',
        year: 1965,
        color: 'bonewhite'
    }
    const myVehicleTwo =({type, color, brand, model})=>{
        // const messageTwo = 'My' + type + ' is a ' + color + ' ' + brand + ' ' + model + ' ';
        // console.log(messageTwo)
    }
    myVehicleTwo(vehicleTwo)

    //kibonthatunk nested objektum tulajdonságokat is, amik még mélyebben tartalmaznak információt:
    const vehicleThree = {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021, 
        color: 'red',
        registration: {
          city: 'Houston',
          state: 'Texas',
          country: 'USA'
        }
      }
      function myVehicleThree({ model, registration: { state } }) {
          const messageThree = 'My ' + model + ' is registered in ' + state + '.';
          console.log(messageThree)
        }
        myVehicleThree(vehicleThree)

    return(
        <div style={paddingStyle} className="container">
            <div style={backButtonStyle} onClick={goBack}>Back</div>
            <section>
                <h3>Display array and destructured constants</h3>
                <h4>Array: </h4>
                {fruits.map((item)=>{
                    <p>const fruits= {item}</p>
                })}
                <h4>Old way destructuring:</h4>
                <ul>
                    <li>
                        const red = {red}
                    </li>
                    <li>
                        const yellow = {yellow}
                    </li>
                    <li>
                        const green = {green}
                    </li>
                    <li>
                        const orange = {orange}
                    </li>
                </ul>
                <p></p>
                <h4>New way of destructuring:</h4>
                <p><u>const myvehicleTwo </u>{`= () => ${myVehicleTwo}`}</p>
                <h4>Destructuring an object with nested data:</h4>
                <p><u>const myVehicleThree {`= () =>${myVehicleThree}`}</u></p>

                <span style={txtsizeSM}><i><u>see results of functions on console</u></i></span>
            </section>
        </div>
    )
}

export default Destructuring;