import { BrowserRouter,Routes,Route} from "react-router-dom"
import SideBar from "../Nav/SideBar"
import Auth from "../RouteComponents/Auth"
import Head from "./Head"
import About from "../RouteComponents/About"
import Home from "./Home"
import FinderUserAction from "../RouteComponents/FinderUserAction"
import Results from "../RouteComponents/Results"
import { useState } from "react"
export default ()=>{
    const[location,setLocation]=useState("");
    const getLocation=(location)=>{
            setLocation(location);
            console.log(location);
    }
    return <>
    <BrowserRouter>
    <Head/>
        <Routes>
            <Route path="/auth" exact Component={Auth}/>
            <Route path="/about" exact Component ={About}/>   
            <Route path="/home" exact Component={Home}/> 
            <Route path="/finder"element={ <FinderUserAction props={getLocation}/>}/>
        </Routes>
    </BrowserRouter>
    <Results props={location}/>
    <SideBar/>
   
</>
}