import { useState } from "react";

function Skills() {

    const [skills, setSkills] = useState([]); //Isme joh Values Rahengi voh Arrays ki form me rahengi,isiliye blanck array liya hain.

    const handleSkills = (event) => {
        const skill = event.target.value;
        const isChecked = event.target.checked;

        console.log(skill, isChecked);

        if (isChecked) {
            setSkills([...skills, skill]);
        } else {
            setSkills(skills.filter(s => s !== skill));
        }
    }

    return (
        <div>
            <h2>Select Your Skills</h2>
            <input onChange={handleSkills} type="checkbox" name="html" id="html" value={"HTML"} />
            <label htmlFor="html">HTML</label>
            <br /><br />

            <input onChange={handleSkills} type="checkbox" name="CSS" id="CSS" value="CSS" />
            <label htmlFor="CSS">CSS</label>
            <br /><br />

            <input onChange={handleSkills} type="checkbox" name="JAVASCRIPT" id="JAVASCRIPT" value="JAVASCRIPT" />
            <label htmlFor="JAVASCRIPT">JAVASCRIPT</label>
            <br /><br />

            <input onChange={handleSkills} type="checkbox" name="REACT" id="REACT" value="REACT" />
            <label htmlFor="REACT">REACT</label>
            <br /><br />

            <h1>{skills.toString()}</h1>
        </div>
    );
}

export default Skills;