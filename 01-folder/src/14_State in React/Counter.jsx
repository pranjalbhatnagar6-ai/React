// # Counter file.jsx at [2:15:00]
// [02:17:23] code step by step

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Counter:{count} </h1>
            <button onClick={()=> setCount(count+1)}>Update Counter</button>
        </div>
    )
}

export default Counter;