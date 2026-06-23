import Pass from "./pass";

function PassMain(){

    const displayName =(name)=>{
        alert(name);
    }
        return(
        
        <>
        <h1>Call Parent Component Function from child Component.</h1>
        <Pass displayName={displayName} name="Pranjal Bhatnagar" />
        <Pass displayName={displayName} name="Abdul Rehman Bhai" />
        <Pass displayName={displayName} name="Siddhu Bhai" />
        <Pass displayName={displayName} name="Prince Bhai" />
        <Pass displayName={displayName} name="Aditya Bhai" />
        <Pass displayName={displayName} name="Aman Bhai" />
        </>

        )

}

export default PassMain;