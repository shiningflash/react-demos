import { useState } from "react/cjs/react.development";

function Form1() {
    const [inputs, setInputs] = useState({});

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = event => {
        // event.preventDefault();
        alert('My username is ' + inputs.username + '. I am ' + inputs.age + ' years old. ' + inputs.description);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter yout name:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter yout age:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <label> Details:
                    <textarea
                        type="text"
                        name="description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit"/>
            </form>
        </>
    )
}

export default Form1;