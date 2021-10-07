const Todos = ({todos}) => {
    console.log("child rendered");
    return (
        <>
            <h2>My Todos</h2>
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </>
    );
};

export default Todos;