// 3:00:19 -Get Input Value in Real Time
// Get Input field Value
// Make Input field.
// Define State.
// Get input field value in state.
// Display Value.
// Clear Input field Value.

import { useState } from "react";

function InpVal() {
  const [val, setVal] = useState("Pranjal Bhatnagar");

  return (
    <div>
      <style>
        {`
          input::placeholder {
            color: white;
            opacity: 1;
          }
        `}
      </style>
      <h1>Get Input Field Value</h1>
      <input
        style={{
          color: 'white',
          margin: '10px',
          padding: '5px',
          backgroundColor: 'green'

        }}

      className="input"
      type="text"
      value={val} //controlled input
      onChange={(event) => setVal(event.target.value)}
      placeholder="Enter User Name"
       />
      <h1>{val}</h1>
      <button
      style={{
          color: 'black',
          margin: '10px',
          padding: '5px',
          borderRadius: '4px',
      }}
      onClick={() => setVal("")} >Clear Value</button>
    </div>
  );
}

export default InpVal;