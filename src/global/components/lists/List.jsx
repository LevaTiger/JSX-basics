import { backButtonStyle, goBack, paddingStyle } from "../../features/goBackBtn"

const List =()=>{

    const cars=[
        {id: 1, brand: "BMW"},
        {id: 2, brand: "Audi"},
        {id:3, brand: "Ferrari"}
    ]



    const border={
        border:'1px solid black',
        padding:'1rem'
    }
    return(
        <div style={paddingStyle} className="container">
            <div style={backButtonStyle} onClick={goBack}>Back</div>
            <h1>Listák</h1>
            <p>Reactben a listákat a {`.map()`} metódus segítségével tudjuk renderelni.</p>
            <p>const cars ={`["BMW","Audi","Ferrari"]`}</p>
            <p>Ezt szeretnénk map-elni</p>
            <div style={border}>
                <h3>Garázs:</h3>
                <ul>
                    {cars.map((car)=>(
                        <li key={car.id}>{car.brand}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default List;