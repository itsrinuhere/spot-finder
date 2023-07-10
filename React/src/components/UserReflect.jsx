export default function UserReflect({data}){
    console.log(data)
    if(data.length!=0){
        return <>
    <div>
       <p> Results </p>
       <div class="container text-center">
            <div class="row">
                {data.locations.map((i,index)=>{
                    return  <div class="col">
                        {i}
                        </div>
                })}
            </div>
        </div>
    </div>
  
    </>
    }else{
        return <>
        <p>Not found</p></>
    }
    
}