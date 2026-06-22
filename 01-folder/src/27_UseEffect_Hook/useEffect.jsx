import { useEffect, useState } from "react";


function UseEffect(){

    const [counter,setCounter] = useState(0);
    const [data, setData] = useState(0);

    useEffect(()=>{
        // callOnce();
        // counterFunction();
        
        //   counterData();
    },[]) //for one time call
    //blanck array ka mtlb hota hain ki bs function ko ek baar chalana hain
    useEffect(()=>{
        // callOnce();
        counterFunction();
          counterData();
    },[data]) //for only data call.

    
    // useEffect(()=>{
        // counterFunction();
    // }) //for everytime call


    function callOnce(){
        console.log("callonce function called");
    }

    function counterFunction(){
        console.log("CounterFunction",counter);
    }

    function counterData(){
        console.log("CounterData",data);
    }
  
    
    
    return(
        <div>
            <h1>UseEffect Hook</h1>
            <button onClick={() => setCounter(counter+1)} >Counter: {counter}</button>
            <button onClick={() => setData(data+1)} >Data: {data}</button>
        </div>
    )
}

export default UseEffect;
