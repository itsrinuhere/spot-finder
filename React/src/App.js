import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import UserAction from './components/UserAction';
import UserReflect from './components/UserReflect';
export default function App(){
  const url ="http://127.0.0.1:8000/";
   const[data,setData]=useState([])
   const getInput=(input)=>{
    axios.get(`${url}location/${input}`).then((res)=>{
      setData(res.data);
    }).catch((error)=>{
      console.log(error);
    })
   }
    return<>
    <UserAction params={getInput}/>
    <UserReflect data={data}/>
    </>
};
