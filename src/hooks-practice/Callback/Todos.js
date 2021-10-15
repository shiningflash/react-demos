import { memo } from "react";

const Todos = ({ todos, addTodos }) => {
    const getRandomNum = () => Math.round(Math.random() * 100);
    const setColor = () => {
        let rand = getRandomNum();
        return (rand % 3 === 0 ? "blue" : (rand % 3 === 1 ? "green" : "red"));
    }

    return (
        <>
            <h4 style={{color: setColor()}}>Child rendered {getRandomNum()}</h4>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodos}>Add Todo</button>
        </>
    )
}

export default memo(Todos);