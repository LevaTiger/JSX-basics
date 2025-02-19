

const CarsData=()=>{

    const cars = [
        { brand: "BMW", model: "M3" },
        { brand: "Audi", model: "A4" },
        { brand: "Mercedes", model: "C-Class" }
      ];
    return(
        <div>
            <h1>Autók listáa:</h1>
            {cars.map((car, index)=>(
                <CarsEasy key={index} brand={car.brand} model={car.model} />
            ))}
        </div>
    )
}


const CarsEasy =({brand, model})=>{

    return(
        <div>
            <h2>{brand}</h2>
            <p>Modell: {model}</p>
        </div>
    )
}

export default CarsData;