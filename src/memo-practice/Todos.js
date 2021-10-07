import { memo } from "react";

const Todos = ({todos}) => {
    console.log("child rendered");

    return (
        <>
            <h2>My Todos</h2>
            <ul>
                {todos.map((todo) => {
                    return <li>{todo}</li>
                })}
                <li>Todo {Math.round(Math.random()*100)}</li>
            </ul>
        </>
    );
};

export default memo(Todos);