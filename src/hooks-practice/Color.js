import { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState("blue");

    return (
        <>
            <h1 style={{color: color}}>My favorite color is {color.toUpperCase()}!</h1>

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
        </>
    )
}

export default FavoriteColor;