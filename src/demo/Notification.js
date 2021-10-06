function Notification() {
    const notify = (event) => {
        alert("This is an alert message of event '" + event.type + "'!");
    }

    return (
        <button onClick={(event) => notify(event)}>Alert</button>
    );
}

export default Notification;