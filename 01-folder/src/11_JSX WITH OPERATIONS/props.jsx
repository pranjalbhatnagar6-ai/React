function Props({object, name, age, mail}){
    // console.log(name, age, mail)
    return(
        <div>
            <hr />
            <h1>{object ? object.name : name}</h1>
            <h1>{object ? object.age : age}</h1>
            <h1>{object ? object.mail : mail}</h1>
        </div>
    )
}
export default Props 