import { useState } from "react";
import Clock from "./Clock";

function Clockmain(){
    const [color,setColor] = useState('green')

    return (
        <div>
            <h1>Digital Clock in React js </h1>
            <select onChange={(event)=>setColor(event.target.value)} >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
            </select>
            <Clock color={color} />
        </div>
    )
}

export default Clockmain;