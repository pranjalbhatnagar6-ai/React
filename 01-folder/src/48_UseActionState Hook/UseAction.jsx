import { useActionState } from "react"

export default function UseAction(){

    const handleSubmit=async (previousData,formData)=>{
        let name = formData.get('name');
        let password = formData.get('password');
        await new Promise(res=> setTimeout(res,2000))
        console.log("handleSubmit Called", name, password);

        if(name && password){
            return{message:'Data Submitted',name, password}
        }else{
            return{error:'Failed to submit.Enter proper data',name, password}
        }
    }
    const [data,action,pending] = useActionState(handleSubmit, undefined)
    console.log(data);
    // data : To Store data of any input fields
    // action : It is a function to which have to pass in form
    // useActionState() : It's also have 2 function one to call any function,and another for to initial value.
    return(
        <div>
            <h1>Use ActionState Hook in React js</h1>
            <form action={action}>
                <input defaultValue={data?.name} type="text" placeholder="Enter Name" name="name"/>
                <br /><br />
                <input defaultValue={data?.password} type="password" placeholder="Enter Password" name="password"/>
                <br /><br />
                <button disabled={pending} >Submit</button>
                <br />
                {
                    data?.error && <span style={{color:'red'}}>{data.error}</span>
                }

                {
                    data?.message && <span style={{color:'red'}}>{data.message}</span>
                }
                
            </form>
            <h3>Name: {data?.name}</h3>
            <h3>Password: {data?.password}</h3>
        </div>
    )
}