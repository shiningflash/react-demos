import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount(count => ++count);
        }, 1000);

        return () => clearTimeout(timer);
    }, []); // run only once
    // }); // run infinitely

    return <h2>Rendered <h1 style={{color:"red"}}>{count}</h1> times!</h2>
}

export default Timer;