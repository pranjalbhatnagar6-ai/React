// import Header from './Header'
// import Login from './userName'
// function Fruit(){
//   return(
//     <div>
//       <Header />
//       <Apple/>
//       <Login/>
//     </div>
//   )
// }

// function Apple(){
//   return(
//     <div>
//       <h1>Apple is red</h1>
//     </div>
//   )
// }

// export default Fruit

// function App(){
//   const name = "Pranjal Bhatnagar";
//   // Object
//   const userObj = {
//     name:"pb",
//     age:21,
//     mail:"pb106@gmail.com"
//   }

//   //Array
//   const userArray = ["Sam Altmon"," Markzuckerburg"," Elon musk"," Bill Gates"]
//   let x = 10;
//   let y = 20;

//   // Image path thruogh variable
//   let img_path = "https://in.pinterest.com/pin/645140715377419702/";


//   // Operations
//   function operation(a,b,op){
//     if(op=="+"){
//       return a+b
//     }
//   }
//   function fruit(){
//     return "Apple"
//   }
//   return(
//     <div>
//       <h1>JSX WITH CURLY BRACES</h1>
//       <h2>{name}</h2>
//       <h3>{x+y}</h3>
//       <h1>{fruit()}</h1>
//       <h2>{userObj.age}</h2>
//       <h2>{userObj.mail}</h2>
//       <h2>{userArray}</h2>
//       {/* ternary operator */}
//       <h2>{name?name:"User does n't found"}</h2>
//       <img src= {img_path} alt="dog" />
//     </div>
//   )
// }

// export default App;

//   ----Events and function call----

// function App() {
//   function callFun(){
//     alert("Function Called");
//   }
//   const fruit=() =>{
//   alert("Apple")
// }

// return (
//   <div>
//     <h1>Event and function call</h1>
//     <button onClick={() =>fruit("Apple")}>Apple</button>
//     <button onClick={() =>fruit("Banana")}>Banana</button>
//   </div>
// )

// }
// export default App

// ----State in React jS[02:03:00]----

// function App(){
//   let fruit = "Apple";
//   const handleFruit = () => {
//     fruit = "Banana"
//   }
//   return (
//     <div>
//       <h1>State in React Js</h1>
//       <h1>{fruit}</h1>
//       <button onClick = {handleFruit}>Change Fruit Name </button>

//     </div>
//   )
// }

// export default App

// NOTE: React js UI ke upar tabhi value update karega jab uska component Re-render hoga.
// Agar koi value change karni hain toh "State" ka use karna hoga. (Automatic Re-render hojayega).

// # State = state is a container to store data like variable.
// mutable and dynamic.
// import it to use 

// # HOOKS = special feature for functional component.
// Hooks let you different React feature from component.
// state, Life cycle methods, side effects etc...


// # ----State in React jS[02:11:28]----
// import Counter from './Counter'
// import { useState } from "react";

// function App(){
// const [state,UpdatedState] = useState("ByDefaultValue");
//   const [fruit,setFruit] = useState("Apple");
//   const handleFruit = () => {
//     setFruit("Banana");
//   }
//   return(
//     <div>
//       <h1>State in React JS</h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>Change fruit Name</button>
//       <Counter/>
//     </div>
//   )
// }

// export default App

// # Counter file.jsx at [2:15:00]

// # Toggle or Hide and Show in React

// import { useState } from "react";

// function App() {

//   const [display, setDisplay] = useState(true);
//   return(
//   <>
//   <h1>Toggle in Display</h1>
//   <button onClick = {() => setDisplay(!display)}>Tap to Display</button>
//   {
//     display ? <h1>Display</h1>:null
//   }
//   </>
//   )
// }

// export default App

// If we want to Toggle the component -> just make another component and attach it.

// import { useState } from "react";
// import ToggleComponent from "./Toggle_Component";

// function App() {
//   const [display, setDisplay] = useState(true);
//   return(
//   <>
//   <h1>Toggle in Display</h1>
//   <button onClick = {() => setDisplay(!display)}>Tap to Display</button>
//   {
//     display ? <ToggleComponent/>:null
//   }
//   </>
//   )
// }

// export default App

// Time = [02:26:28]
// # Multiple Conditon in React
// 1.Define state in Condition
// 2.Change state value on button click
// 3.Apply Condition with State


// import { useState } from "react";

// function App() {
//   const [count,setCount] = useState(0)
//   return(
//     <div>
//       <h1>Multiple Conditions in React</h1>
//       <button onClick={() => setCount(count + 1)} > Counter </button>
//       <h1>{count}</h1>
//       {
//         count==0?<h1>Condition 0</h1>
//         :count==1?<h1>Condition 1</h1>
//         :count==2?<h1>Condition 2</h1>
//         :count==3?<h1>Condition 3</h1>
//         :count==4?<h1>Condition 4</h1>
//         :count==5?<h1>Condition 5</h1>
//         :null
//       }
//     </div>
//   )
// }

// export default App

// Time = [02:30:28]
// # Props in React js
// What is Props?
// Jab bhi ek component se dusre component me data ko transfer karna hota hai tab hum props ka use karte hain.
// Make Component

// import Props from "./props"
// for Props
// function App(){
//   return(
//     <div>
//       <h1>Props in react js</h1>
//       <Props name={"Pranjal Bhatnagar"} age={21} mail="pb@gmail.com"/>
//       {/*data pass to kardiya recieve kaise karoge ? -> pass the parameter in another which you made paramater -> props  */}
//     </div>
//   )
// }

// export default App

// for Variable
// import Props from "./props"
// function App(){
// let name= "PB";
// let age = 21;
// let mail = "pb@gmail.com";
//   return(
//     <div>
//       <h1>Props in react js</h1>
//       <Props name={name} age={age} mail={mail}/>
//     </div>
//   )
// }

// export default App

// For Object

// import Props from "./props"
// function App(){
//   let userObject1 = {
//     name: "TV",
//     age: "23",
//     mail: "tv@gmail.com"
//   }

//   let userObject2 = {
//     name: "UV",
//     age: "33",
//     mail: "UV@gmail.com"
//   }

//   let userObject3 = {
//     name: "CB",
//     age: "26",
//     mail: "cb@gmail.com"
//   }

//   return(
//     <div>
//       <h1>Props in react js</h1>
//       <Props object = {userObject1} />
//       <Props object = {userObject2} />
//       <Props object = {userObject3} />
//     </div>
//   )
// }

// export default App

// Pass data between components
// Var, object, array
// Receive and Display Data.
// Pass data in component with click
// Interview Question




// # More About Props Time[02:51:00]
// Default props
// Pass JSX with Props
// Change style with props

// User file Created

// import User from "./User"

// function App(){
//   return(
//     <div>
//       <h1>More about Props</h1>
//       <User name="Pranjal Bhatnagar" />

//       <User />
//       <User />
//     </div>
//   )
// }

// export default App

// Pass JSX with Props -> Making Wrapper.jsx


// fuction App(){
//   return(
//     <Wrappper>
//       <h1>Writing html,passing jsx with props </h1>
//     </Wrappper>
//   )
// }

// export default App;

// 3:00:19 - React onChange Event Explained | Get Input Value in Real Time  
// Get Input field Value
// Make Input field.
// Define State.
// Get input field value in state.
// Display Value.
// Clear Input field Value.

import { useState } from "react";

function App() {
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

export default App;

