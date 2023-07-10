import { useState } from "react"
export default function UserAction({params}){
    const[input,setInput]=useState("");
    const search=()=>{
       params(input)
    }
    const getData=(object)=>{
        setInput(object.target.value);
    }
    return  <>
            <div>
                <h1>Welcome to tourism</h1>
                <h2> This web-app shows the tourist spots from our database.</h2>
            </div>
            <div>
                <h1>Enter City Name</h1>
                <input 
                    onChange={getData}
                />
                <button onClick={search}>search</button>
            </div>
            </>
}