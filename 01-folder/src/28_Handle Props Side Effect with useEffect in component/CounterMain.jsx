import Counter from "./Counter";
import { useState } from "react";

function CounterMain() {
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Handle Props Side Effect with useEffect in component</h1>
            <Counter count={count} />
            <button onClick={()=>setCount(count+1)} >Counter {count}</button>
        </div>
    )
}

export default CounterMain;