import { useEffect, useRef, useState } from "react";

function RenderCount() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <h1>Render Count: {count.current}</h1>

            <input
                type="text"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
        </>
    )
}

export default RenderCount;