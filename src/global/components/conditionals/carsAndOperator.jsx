

const CarsAndOperator =()=>{

    const cars = ['BMW', 'Mercedes', 'Audi']
    return(
        <div>
            <h1>&& operator</h1>
            <h2>Garage</h2>
            {
                cars.length > 0 &&
                <h3>You have <u>{`${cars.length}`}</u> cars in your garage.</h3>
            }
        </div>
    )
}

export default CarsAndOperator;