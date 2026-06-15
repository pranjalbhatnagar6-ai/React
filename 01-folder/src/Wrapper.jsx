function Wrapper({children}){
    return(
        <div style={{color:"green",border:"5px solid green margin:10px"}} >
            {/* if i want to use html wrapper in App.jsa use children  */}
            {children}
        </div>
    )
}