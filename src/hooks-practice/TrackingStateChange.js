import { useEffect, useRef, useState } from "react";

function TrackingStateChange() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <h2>Previous value: {previousInputValue.current}</h2>
            <h1>Current value: {inputValue}</h1>

            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
        </>
    )
}

export default TrackingStateChange;