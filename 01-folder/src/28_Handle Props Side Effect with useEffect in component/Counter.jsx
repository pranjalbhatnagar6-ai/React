import { useEffect } from "react";

const Counter =({count})=> {

    const handleCounter = () =>{
        console.log("handleCounter called");
    }

    useEffect(()=>{
        handleCounter();
    },[])

    
    return (
        <div>
            <h1>Counter value:{count}</h1>
        </div>
    );
}

export default Counter;