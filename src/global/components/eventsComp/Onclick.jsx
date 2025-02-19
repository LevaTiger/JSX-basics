import { paddingStyle, goBack, backButtonStyle } from "../../features/goBackBtn"

const Onclick =()=>{


    const shootOne =()=>{
        alert('GOAL sima!')
    }

    const shootArg=(a)=>{
        alert(a)
    }

    const shootObj=(a,b)=>{
        alert(`${a} ${b.type}`)
    }
    return(
        <div className="container" style={paddingStyle}>
            <div style={backButtonStyle} onClick={goBack}>back</div>


            <h2>Függvény átadása onClick-nek csupán ennyi:</h2>
            <p><u>onClick</u>= {`{shootFunction}`}</p>
            <button type="button" onClick={shootOne}>SHOOT</button>

            <h2>Argumentum átadásánál:</h2>
            <h5>Nyíl függvény ként kell meghívni</h5>
            <p><u>const</u> shoot = {`(a)=>{alert(a)}`}</p>
            <p><u>onClick</u>= <i>{`{()=>shootFunction(argumentum szövege/értéke)}`}</i></p>
            <button type="button" onClick={()=>shootArg('Goal baszod!')}>SHOOT</button>

            
            <p>Nyíl függvénnyek a,b argumentum és event object</p>
            <p>b.type megmutatja hogy milyen esmeényt kezelünk, ezt hívjuk meg, ami pedig a 'click' esemény lesz</p>
            <button type="button" onClick={(event)=>shootObj("Ez az esemény a:", event)}>SHOOT</button>


        </div>
    )
}

export default Onclick;