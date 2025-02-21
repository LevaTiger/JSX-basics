import { useEffect, useState } from "react";
import { goBack, backButtonStyle, paddingStyle } from "../../features/goBackBtn";

const ArrayMethods =()=>{



    //alap tömb map() metódussal való megjelenítése
    const fruits = ['apple', 'banana', 'orange']

    //objektumok tömbben
    const objinArray= 
    [
        {
            user: 'Lev',
            pswd: "pswd1"
        },
        {
            user: 'Let',
            pswd: 'pswd2'
        },
        {
            user: 'Vik',
            pswd: 'pswd3'
        }
    ]

    const textData = JSON.stringify(objinArray)
    console.log(textData)

    return(
        <div style={paddingStyle} className="container">
            <div style={backButtonStyle} onClick={goBack}>
                Back
            </div>
            <section>
                <h3>Arrays and Methods</h3>
                <h4>Array "fruits" mapped by item</h4>
                {fruits.map((item, index)=>(
                    <p key={index}>{item}</p>
                ))}
            </section>
            <section>
                <h3>Mapping objects from an array</h3>
                {objinArray.map((item, index)=>(
                    <ul key={index}>
                        <li >{item.user}</li>
                        <li >{item.pswd}</li>
                    </ul>
                ))}
                <h4>Original Array data:</h4>
                <p>{`${textData}`}</p>
                <h1>New text</h1>
            </section>
        </div>
    )
}

export default ArrayMethods;