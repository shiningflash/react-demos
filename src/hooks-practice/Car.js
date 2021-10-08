import { useState } from "react/cjs/react.development";

function FavoriteCar() {
    const [color, setColor] = useState("blue");
    const [car, setCar] = useState({
        color: color,
        brand: 'Audi'
    })

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setCar(values => ({...values, [name]: value}))
    }

    return (
        <>
            <h1 style={{color: color}}>My favorite car is {car.color} {car.brand}!</h1>

            <hr/>

            <button
                type="button"
                onClick={() => setColor("blue")}
            > Blue </button>
            <button
                type="button"
                onClick={() => setColor("green")}
            > Green </button>
            <button
                type="button"
                onClick={() => setColor("red")}
            > Red </button>
            <button
                type="button"
                onClick={() => setColor("black")}
            > Black </button>

            <form>
                <label> Brand: 
                    <input
                        type="text"
                        name="brand"
                        value={car.brand || ""}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </>
    )
}

export default FavoriteCar;