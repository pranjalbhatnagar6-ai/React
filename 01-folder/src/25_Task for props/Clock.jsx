import { useEffect, useState } from "react";

const Clock =({color})=>{
    const [time,setTime] = useState("00:00:00 AM");

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        },1000);
    },[])
    return(
        <div>
            <h1>Digital CLock in React js</h1>
            <h2>Clock</h2>
            <h3 style={{color:color,backgroundColor:'#000',width:'100px',padding:"10px",borderRadius:'5px',}}>{time}</h3>
        </div>
    )
}

export default Clock