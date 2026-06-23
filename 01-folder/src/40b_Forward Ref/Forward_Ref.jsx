import { useRef } from "react";
import UserInput from "./UserInputField";
function ForwardRef(){
    const inputRef=useRef(null)

    const updateInput=()=>{
        inputRef.current.value=1000;
        inputRef.current.focus();
        inputRef.current.style.color="red";
    }
    return(
        <>
        <h1>Forward Ref</h1>
        <input type="text" ref={inputRef} />
        <button onClick={updateInput}>Update Input field</button>
        </>
    )

}

export default ForwardRef;