function Car() {
    return <h2>This is a nice car!</h2>
}

function CarDetails(props) {
    return <>
        <h1>Car brand: {props.brand}</h1>
        <Car/>
    </>
}

export default CarDetails;