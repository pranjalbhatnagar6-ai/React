import { useContext } from "react";
import { SubjectContext } from "./ContextData";

export default function Student() {
    const subject=useContext(SubjectContext)
    return (
      <div  style={{backgroundColor:'red', padding:10}}>
        <h1>Subject Component</h1>
        <h2>Subject is:{SubjectContext}</h2>
      </div>
    )
  
  }