import { useState } from "react";

export default function UpdateArray(){

    const [data, setData] = useState([
        'pb','AR','KT','TV',
    ])

    const [dataDetails,setDataDetails] = useState([
        {name:'PB',age:'21'},
        {name:'AR',age:'22'},
        {name:'KT',age:'24'},
    ])

    const handleUser = (name) =>{
        data[data.length-1] = name;
        console.log(data);
        setData([...data])
    }

    const handleAge = (age) =>{
        dataDetails[dataDetails.length-1].age = age;
        console.log(dataDetails);
        setDataDetails([...dataDetails])
    }

    return(
        <div>
            <h1>Updating Array in State</h1>

            <input type="text" placeholder="Enter to update Last user name" onChange={(e) => handleUser(e.target.value)} />
            {
                data.map((item, index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            }

            <hr />
            
            <input type="text" placeholder="Enter to update Last user Age" onChange={(e) => handleAge(e.target.value)} />
            {
                dataDetails.map((item, index)=>(
                    <h4 key={index}>{item.name},{item.age}</h4>
                ))
            }
            

        </div>
    )

}