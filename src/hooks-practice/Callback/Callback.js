import { useCallback, useState } from "react";
import Todos from "./Todos";

function Callback() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => setCount(count => count + 1);
    const addTodo = useCallback(() => {
        setTodos(todos => [...todos, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodos={addTodo}/>
            <hr/>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}

export default Callback;