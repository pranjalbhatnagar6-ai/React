// Handle radio and dropdown and get values.

import { useState } from "react";

function Handle() {
  const [gender,setGender] = useState('female');
  const [city,setCity] = useState('Lucknow');
  return(
  <div>
    <hr />
    <h2>Handle radio and dropdown and get values</h2>
    <h4>Select Gender</h4>
    <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" id="male" value={"male"} checked={gender == 'male'} />
    <label htmlFor="male">Male</label>

    <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" id="female" value={"female"} checked={gender == 'female'} />
    <label htmlFor="female">Female</label>
    <h2>Selected Gender : {gender}</h2>
    <hr />
    <h2>Select City</h2>
    <select onChange={(event) => setCity(event.target.value)} defaultValue={"Lucknow"} >
      <option value="Lucknow">Lucknow</option>
      <option value="Kanpur">Kanpur</option>
      <option value="Barely">Barely</option>
      <option value="Sitapur">Sitapur</option>
    </select>
    <h3>Selected City : {city}</h3>
    <hr />
  </div>
  )
}

export default Handle;