import Props from "./props"

function Operations(){
  const name = "Pranjal Bhatnagar";
  // Object
  const userObj = {
    name:"pb",
    age:21,
    mail:"pb106@gmail.com"
  }

  //Array
  const userArray = ["Sam Altmon"," Markzuckerburg"," Elon musk"," Bill Gates"]
  let x = 10;
  let y = 20;

  // Image path thruogh variable
  let img_path = "https://in.pinterest.com/pin/645140715377419702/";

  // Operations
  function operation(a,b,op){
    if(op=="+"){
      return a+b
    }
  }
  function fruit(){
    return "Apple"
  }

  return(
    <div>
      <h1>JSX WITH CURLY BRACES</h1>
      <h2>{name}</h2>
      <h3>{x+y}</h3>
      <h1>{fruit()}</h1>
      <h2>{userObj.age}</h2>
      <h2>{userObj.mail}</h2>
      <h2>{userArray}</h2>
      {/* ternary operator */}
      <h2>{name?name:"User does n't found"}</h2>
      <img src= {img_path} alt="dog" />
    </div>
  )
}

export default Operations;




// for Variable

export function Var(){
let name= "PB";
let age = 21;
let mail = "pb@gmail.com";
  return(
    <div>
      <h1>Props in react js</h1>
      <Props name={name} age={age} mail={mail}/>
    </div>
  )
}



// For Object
export function Obj(){
  let userObject1 = {
    name: "TV",
    age: "23",
    mail: "tv@gmail.com"
  }

  let userObject2 = {
    name: "UV",
    age: "33",
    mail: "UV@gmail.com"
  }

  let userObject3 = {
    name: "CB",
    age: "26",
    mail: "cb@gmail.com"
  }

  return(
    <div>
      <h1>Props in react js</h1>
      <Props object = {userObject1} />
      <Props object = {userObject2} />
      <Props object = {userObject3} />
    </div>
  )
}
