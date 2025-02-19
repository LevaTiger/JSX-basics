
const ChildPropFunction =({onClick, onClickTwo, margin})=>{

   

    return(
        <div style={margin}>
            <h3>Gyermek komponens vagyok</h3>
            <button type="button" onClick={onClick}>Kattolj</button>
            <button type="button" onClick={onClickTwo}>Kattide</button>
        </div>
    )
}

export default ChildPropFunction;