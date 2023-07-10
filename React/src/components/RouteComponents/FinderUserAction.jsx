import { useEffect ,useState} from "react";
import {Button} from 'antd'
import Results from "./Results";
export default ({props})=>{
    const[latitude,setLatitude]=useState();
    const[longitude,setLongitude]=useState();
    const[location,setLocation]=useState("");
    const locationbuttonHandler=()=>{
       props(location)
    }
    const GeobuttonHandler=(lattitude,longitude)=>{
    }
    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
            },
            (error) => {
              console.log(error.message);
            }
          );
        } else {
          console.log('Geolocation is not supported by this browser.');
        }
      }, []);
    return <>
    <div class="container">
    <div class="wrapper d-flex align-items-stretch">
      <div id="content" class="p-4 p-md-5">
        <h2 class="mb-4">Finder</h2>
        <div class="row">
            <div class="col">
            <Button type="primary" block onClick={locationbuttonHandler}>Search By Place </Button>
            </div>
            <div class="col">
                <Button type="primary" block onClick={GeobuttonHandler(latitude,longitude)}>Search By GPS</Button>
            </div>
        </div>
        <div>
            <p>Enter a place</p>
        <input onChange={(e)=>{
              setLocation(e.target.value);
        }}/>
        </div>
        <div>
          <Results></Results>
        </div>
       
        </div>
        <div>
            
        </div>
        </div>
    </div>
    </>
}