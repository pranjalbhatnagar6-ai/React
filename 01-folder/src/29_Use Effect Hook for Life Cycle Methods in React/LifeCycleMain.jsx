import LifeCycle from "./LifeCycle";
import { useState } from "react";

function LifeCycleMain() {
    const [count,setCount]=useState(0);
    const [data,setData]=useState(0);
    const [display,setDisplay]=useState(true);
    return(
        <div>
            <h1>Handle Props Side Effect with useEffect in component</h1>
            {
              display?<LifeCycle count={count} data={data}></LifeCycle>:null  
            }
            <button onClick={()=>setCount(count+1)} >Counter: {count}</button>
            <button onClick={()=>setData(data+1)} >Data: {data}</button>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
        </div>
    )
}

export default LifeCycleMain;