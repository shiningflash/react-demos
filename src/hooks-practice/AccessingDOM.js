import { useRef } from "react";

function AccessingDOM() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    }

    return (
        <>
            <button onClick={focusInput}>Focus Input</button>
            <input type="text" ref={inputElement}/>
        </>
    )
}

export default AccessingDOM;