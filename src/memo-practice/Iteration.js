import { useState } from "react";
import Todos from "./Todos";

const Iteration = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["Todo 1", "Todo 2", "Todo 3"]);

    const styles = {
        backgroundColor: "cyan",
        padding: "20px"
    };

    const buttonStyles = {
        backgroundColor: "blue",
        borderColor: "blue",
        color: "white",
        padding: "2px 6px",
        margin: "3px"
    };

    const decrement = () => {
        setCount((c) => --c);
    }

    const increment = () => {
        setCount((c) => ++c);
    }

    return (
        <div style={styles}>
            <Todos todos={todos}/>
            <hr/>
            <div>
                <button onClick={decrement} style={buttonStyles}>-</button>
                <button onClick={increment} style={buttonStyles}>+</button>
                <p>Count: {count}</p>
            </div>
        </div>
    )
}

export default Iteration;