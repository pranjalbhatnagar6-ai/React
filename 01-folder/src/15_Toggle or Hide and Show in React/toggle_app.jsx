// If we want to Toggle the component -> just make another component and attach it.

import { useState } from "react";
import ToggleComponent from "./Toggle_Component";

function App() {
  const [display, setDisplay] = useState(true);
  return(
  <>
  <h1>Toggle in Display</h1>
  <button onClick = {() => setDisplay(!display)}>Tap to Display</button>
  {
    display ? <ToggleComponent/>:null
  }
  </>
  )
}

export default App;