const Todos = ({ todos, addTodos }) => {
    console.log("Child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodos}>Add Todo</button>
        </>
    )
}

export default Todos;