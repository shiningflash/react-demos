import { useState } from "react";
import Todos from "./Todos";

const Iteration = () => {
    const [todos, setTodos] = useState(["Todo 1", "Todo 2", "Todo 3"]);

    return (
        <>
            <Todos todos={todos}/>
        </>
    )
}

export default Iteration;