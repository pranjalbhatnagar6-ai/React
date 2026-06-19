// # ----State in React jS[02:11:28]----
import Counter from './Counter'
import { useState } from "react";

function State(){
// const [state,UpdatedState] = useState("ByDefaultValue");
  const [fruit,setFruit] = useState("Apple");
  const handleFruit = () => {
    setFruit("Banana");
  }
  return(
    <div>
      <h1>State in React JS</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change fruit Name</button>
      <Counter/>
    </div>
  )
}

export default State;

// NOTE: React js UI ke upar tabhi value update karega jab uska component Re-render hoga.
// Agar koi value change karni hain toh "State" ka use karna hoga. (Automatic Re-render hojayega).

// # State = state is a container to store data like variable.
// mutable and dynamic.
// import it to use

// # HOOKS = special feature for functional component.
// Hooks let you different React feature from component.
// state, Life cycle methods, side effects etc...