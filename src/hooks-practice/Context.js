import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function Component1() {
    const [user, setUser] = useState("Amirul Islam");

    return (
        <UserContext.Provider value={user}>
            <h1>Hello {user}</h1>
            <h1>Component 1</h1>
            <Component2/>
            <hr/>
            <form>
                <label>Name:
                    <input
                        type="text"
                        onChange={
                            event => setUser(event.target.value)
                        }
                    />
                </label>
            </form>
        </UserContext.Provider>
    )
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3/>
        </>
    )
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4/>
        </>
    )
}

function Component4() {
    const user = useContext(UserContext);
    
    return (
        <>
            <h1>Component 4</h1>
            <h1>Hello {user} again!</h1>
        </>
    )
}

export default Component1;