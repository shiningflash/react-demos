import { useState } from "react/cjs/react.development";

function CurrentTime() {
    const [moment, setMoment] = useState("Morning");
    const [time, setTime] = useState({
        exacttime: '08:00',
        day: "Friday"
    })

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setTime(values => ({
            ...values,
            [name]: value
        }))
    }

    return (
        <>
            <h1>It's {time.day} {moment}. Exact time {time.exacttime}.</h1>

            <hr/>

            <button
                type="button"
                onClick={()=>setMoment("Morning")}
            > Morning </button>
            <button
                type="button"
                onClick={()=>setMoment("Evening")}
            > Evening </button>
            <button
                type="button"
                onClick={()=>setMoment("Night")}
            > Night </button>

            <hr/>

            <form>
                <label> Day: 
                    <input
                        type="text"
                        name="day"
                        value={time.day || ""}
                        onChange={handleChange}
                    />
                </label>
                <hr/>
                <label> Exact Time: 
                    <input
                        type="text"
                        name="exacttime"
                        value={time.exacttime || ""}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </>    
    )
}

export default CurrentTime;