import { useState } from "react";

function Form() {
    const [name, setName] = useState();
    const [age, setAge] = useState();

    return (
        <>
            <form>
                <label> Enter your name:
                    <input 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value.toUpperCase())}
                    />
                </label>
                <label> Enter your age:
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </label>
            </form>
            <button
                onClick={event => alert('My name is ' + name + '. I am ' + age + ' years old.')}>
                    Submit
            </button>
        </>
    )
}

export default Form;