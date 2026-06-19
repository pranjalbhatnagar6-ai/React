// # Toggle or Hide and Show in React

import { useState } from "react";

function Toggle() {

  const [display, setDisplay] = useState(true);
  return(
  <>
  <h1>Toggle in Display</h1>
  <button onClick = {() => setDisplay(!display)}>Tap to Display</button>
  {
    display ? <h1>Display</h1>:null
  }
  </>
  )
}

export default Toggle;

