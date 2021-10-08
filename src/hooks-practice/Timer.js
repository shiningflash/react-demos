import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count => ++count);
        }, 1000);
    }, []);

    return <h2>Rendered <h1 style={{color:"red"}}>{count}</h1> times!</h2>
}

export default Timer;