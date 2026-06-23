function UseFormStatus(){
    return(
        <>
        <div>
            <h1>useFormStatus Hook</h1>
            <form action="handleSubmit">
                <input type="text" placeholder="Enter Name" />
                <br /><br />
                <input type="text" placeholder="Enter Password" />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}

export default UseFormStatus;