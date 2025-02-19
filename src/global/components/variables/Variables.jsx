import { useState } from "react";
import { goBack, backButtonStyle, paddingStyle } from "../../features/goBackBtn";
const Variables = ()=>{

    // const paddingStyle = {
    //     padding: '2rem',
    //     backgroundColor: 'lightgray',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    // };

    let numA = 0;
    console.log(`let NumA= ${numA}`)
    const updateNumA =()=>{
        const numA = 1
        console.log(` const NumA = ${numA}`)
    }
    updateNumA();


    const [array, setArray] = useState([1, 2, 3]);
    const [newArray, setNewArray] = useState([]);
    const object = {
        name: 'John',
        age: 50
    }

    const changeArrayValues =()=>{
        const updatedArray = [...array, 4, 5]
        setNewArray(updatedArray);
        changeArrayValues();
    }
    return(
        <div style={paddingStyle} className="container">
            <div style={backButtonStyle} onClick={goBack}> back</div>
            <h4>Változók alapjai:</h4>
            <section>
                <h5>A változóknak három fajtája van:</h5>
                <ul>
                    <li>var</li>
                    <li>let</li>
                    <li>const</li>
                </ul>
                <p><i><b>var:</b></i> A <u>var</u> -nak egy függvény szkópja van, ami azt jelenti, hogy ha függvényen belül hívod meg, akkor csak a függvényen belül érhető el, de ha egy másik blokkon belül akkor a blokkon kívül is elérhető, illetve ha globálisan van meghívva, akkor pedig globálisan lesz elérhető.</p>
                <p><i><b>let: </b></i>A <u>let</u> a blokk szkóp verziója a <u>var</u>-nak. A var-ral ellentétben, a let blokkokon belül vagy globálisan érthető el, mitán deklraláltuk azt. Tehát az adott kód blokkon kívül nem érhető el, míg a <u>var</u> elérhető. <br />PLUSZ: a <u>let</u> bármikor újradekralálható, azaz megkaphat új értéket, amennyiben NEM egy blokkon belül helyezkedik el.</p>
                <p><i><b>const: </b></i>A <u>const</u> egy olyan érték/változó, amit étrehozása után nem tudunk megváltoztatni. A <u>const</u>-nak is blokk szkópja van. <br />A <u>const</u> egy kicsit félrevezető, mert nem tudsz újradefiniálni egy constant értéket, constant tömböt, vagy egy constant objektum-ot, tehát nem tudsz egy constant objectből mást csinálni, pl egy számot belerakni. <br />De a constant tömb és constant objektum ELEMEIT meg tudod változtatni!</p>
            </section>
            <section>
                <h5>Példa: let numA és const numA függvényben:</h5>
                <p><b>Alapértelmezett let numA:</b> <u><i>{numA}</i></u></p>
                <p><b>Frissített const numA:</b> <u><i>{`${updateNumA}`}</i></u></p>
            </section>
            <section>
                <h4>Példa: Tömb és objektum TARTALMÁNAK megváltoztatása:</h4>
                <p>Eredeti "array": {array}</p>
                <p>Eredeti "object": {`{${object.name}, ${object.age}}`}</p>
                <p>Új frissített "newArray" <sup>ehhez useState kell</sup>: {newArray}</p>
            </section>
        </div>
    )
}

export default Variables;