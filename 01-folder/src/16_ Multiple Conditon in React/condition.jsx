// # Multiple Conditon in React
// 1.Define state in Condition
// 2.Change state value on button click
// 3.Apply Condition with State


import { useState } from "react";

function Condition() {
  const [count,setCount] = useState(0)
  return(
    <div>
      <h1>Multiple Conditions in React</h1>
      <button onClick={() => setCount(count + 1)} > Counter </button>
      <h1>{count}</h1>
      {
        count==0?<h1>Condition 0</h1>
        :count==1?<h1>Condition 1</h1>
        :count==2?<h1>Condition 2</h1>
        :count==3?<h1>Condition 3</h1>
        :count==4?<h1>Condition 4</h1>
        :count==5?<h1>Condition 5</h1>
        :null
      }
    </div>
  )
}

export default Condition;