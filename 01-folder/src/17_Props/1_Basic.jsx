import User from "./1_User";

function Basic(){
    let userName = "PB";
    let age = "21";
    let email = "pb@test.com"
    return(
        <>
        <User name={userName}/>
        </>
    )
}

export default Basic;