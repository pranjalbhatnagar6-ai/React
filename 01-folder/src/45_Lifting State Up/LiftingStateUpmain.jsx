import { useState } from "react";
import AddUser from "./AddUserA";
import DisplayUser from "./DisplayUserB";

function LiftingState(){
    const [user,setUser] = useState('')
    return(
        <div>
            <AddUser setUser={setUser} />
            <DisplayUser user={user} />
        </div>
    )
}

export default LiftingState;