export default function UserReflect({data}){
    console.log(data)
    if(data.length!=0){
        return <>
    <div>
       <p> Results </p>
       <h2> Searched for :{data.city}</h2><br/>
        Locations are :{data.locations.map((i,index)=>{
            return <>
            <li key={index}><button onClick={()=>{
                console.log(i);
            }}>{i}</button></li>
            </>
        })}
  
    </div>
  
    </>
    }else{
        return <>
        <p>Not found</p></>
    }
    
}