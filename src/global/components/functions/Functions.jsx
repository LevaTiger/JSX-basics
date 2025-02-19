import { useState } from "react";
import { goBack, backButtonStyle, paddingStyle } from "../../features/goBackBtn";
const Functions =()=>{


    //simple a+b function
    
    const addNums =(numA, numB)=>{
        const sum= numA+numB;
        return sum;
    }

    const [result] = useState(addNums(5,10));
    console.log(result)
    const addNumsMin =(numA, numB)=>{
        return numA+numB;
    }
    
    const [resultMin] = useState(addNums(3,4));
    console.log(resultMin)

    //css inline stílus ként változóban elhelyezve
    // const paddingStyle = {
    //     padding: '2rem',
    //     backgroundColor: 'lightgray',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    // };

   
    //this használata
    const obj = {
        name: 'Alice',
        greet: function(){
            console.log(`Hello, my name is: ${this.name}`)
        }
    };
    obj.greet();

    function person(name){
        {
            this.name = name;
        }
    }
    const person1 = new person('Bob');
    console.log(person1.name)




    return(
        <div style={paddingStyle} className="container">
            <div style={backButtonStyle} onClick={goBack}> back</div>
            <h4>Függvény egyszerű összeadás változóba tárolva:</h4>
            <p>{`${addNums}`}</p>
            <p>Nums result is: {result} </p>
            <h4>Függvény egyszerű összeadás változó nélül visszaküldve:</h4>
            <p>{`${addNumsMin}`}</p>
            <p>{resultMin}</p>
        </div>
    )
}

export default Functions;