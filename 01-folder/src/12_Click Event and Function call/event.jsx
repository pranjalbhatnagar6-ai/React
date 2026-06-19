//   ----Events and function call----

function Event() {
    function callFun() {
        alert("Function Called");
    }
    const fruit = () => {
        alert("Apple")
    }

    return (
        <div>
            <h1>Event and function call</h1>
            <button onClick={() => fruit("Apple")}>Apple</button>
            <button onClick={() => fruit("Banana")}>Banana</button>
        </div>
    )

}

export default Event;