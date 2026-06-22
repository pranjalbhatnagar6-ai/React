import { useEffect } from "react";

const LifeCycle =({count,data})=> {

        useEffect(()=>{
            console.log("Mounting phase only");
    },[])

    useEffect(()=>{
        console.log("update phase only");
    },[count])

    useEffect(()=>{
        return(
            console.log("unmount phase only")
        )
    },[])

    return (
        <div>
            <h1>Counter value:{count}</h1>
            <h1>Data Value:{data}</h1>
        </div>
    );
}

export default LifeCycle;