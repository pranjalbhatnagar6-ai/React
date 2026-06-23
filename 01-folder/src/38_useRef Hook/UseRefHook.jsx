import {useRef} from "react"

function UseRefHook() {
    const inputRef = useRef(null);

    const inputHandler = () => {
        if (!inputRef.current) return;
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color = "red";
        inputRef.current.placeholder = "Enter password";
        inputRef.current.value = "123";
    };

    const toggleHandler = () => {
        if (!inputRef.current) return;
        const el = inputRef.current;
        el.style.display = el.style.display !== "none" ? "none" : "inline";
    };

    return (
        <>
            <h1>UseRef</h1>
            <button onClick={toggleHandler}>Toggle</button>
            <input ref={inputRef} type="text" placeholder="Enter User Name" />
            <button onClick={inputHandler}>Focus on input Field</button>
        </>
    );
}

export default UseRefHook;