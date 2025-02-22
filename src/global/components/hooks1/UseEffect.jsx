import { useEffect, useState } from "react";
import { pColorBlue } from "../../features/goBackBtn";

const UseEffect=()=>{

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
 
    useEffect(()=>
        {
            setTimeout(()=>{
                setCalculation(()=> count *2)
            });
        },[count] );

    return(

        <div>
            <h1>UseEffect</h1>
            <p>A useEffect-el a mellékhatásokat tudjuk ekzelni. Ezek közül láthatunk néhányat:</p>
            <ul>
                <li>fetching Data</li>
                <li>directly updating DOM</li>
                <li>timers</li>
            </ul>
            <h3>UseEffect 2 argumentumot fogad el:</h3>
            <ol>
                <li>function</li>
                <li>dependency</li>
            </ol>
            <p>A Második argumetnum opcionális</p>
            <p><b>Szintaxisa:</b>
                <span style={pColorBlue}>{`useEffect(function, dependency)`}</span>
            </p>
            <h3>count, setCount példa</h3>
            <p>Ezt rendereltem ennyiszer: {count}</p>
            <hr />
            <p>A kód így néz ki:</p>
            <p style={pColorBlue}>{`useEffect(()=>{
                    setTimeout(()=>{
                        setCount((count)=> count +1)
                    }, 1000);
                     });`
            }</p>
            <hr />
            <p>A kód végén található "1000" adja meg azt, hogy mennyi idő legyen a renderelés, ami itt 1000ms. Ez így mindig le fog futni amikor lefut egy setCount másodpercenként. Ahhoz, hogy megállítsuk szükségünk lesz a második argumentumra</p>
            <p>Dependency nélkül:<span style={pColorBlue}>
                 {`useEffect(() => {
                                        //Runs on every render
                                        });`}
            </span>
            </p>
            <p>Egy üres tömböt átadva: <span style={pColorBlue}>
                {`
                                            useEffect(() => {
                                            //Runs only on the first render
                                            }, []);
                                            `}
            </span></p>
            <p>Count: {count}</p>
            <button onClick={()=>setCount((c)=> c+1)}>+2</button>
            <p>Calculation: {calculation}</p>
        </div>
    )
}

export default UseEffect;