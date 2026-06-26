import { useState } from "react"


function UpdatingObject(){
    const [data,setData]=useState({
        name:"PB",
        address:{
            city:'Delhi',
            country:'india'
        }
    })

    const handleName = (val) => {
        data.name = val

        setData({...data})
    
    }

    const hanleCity = (city) => {
        data.address.city = city;
        console.log(data);
        setData({...data,address:{...data.address, city }  })

    }

    return(
        <div>
            <h1>Updating Objects in State</h1>

            <input type="text" placeholder="update name" onChange={(event) => handleName(event.target.value)} />

            <input type="text" placeholder="update City" onChange={(event) => handleCity(event.target.value)} />
            <h2>Name :{data.name}</h2>
            <h2>City:{data.address.city}</h2>
            <h2>Country:{data.address.country}</h2>
        </div>
    )
}

export default  UpdatingObject;