import { use, useState } from "react"

const useToggle=()=>{
    const [value, setValue]=useState()
    function toggleValue(val){
        if(val){
            console.log("if");
            setValue(!value)
        }
        else{
            console.log("else");
            setValue(val)
        }
    }

    return[value, toggleValue]
}

export default useToggle;