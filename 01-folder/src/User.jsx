function User({name = "WELCOME, NEW USER"}){
    return(
        <div>
            <h1>User Component</h1>
            <h1>Hi, {name}</h1>
        </div>
    )
}

export default User