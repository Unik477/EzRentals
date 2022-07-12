import React, {useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import Buttons from "../Button/Buttons";
import axios from "axios"
import home from "../Home/Home"
import { Button } from "react-bootstrap";
import Slide from "../Offers/Slide";

const Login = () => {

    const navigate = useNavigate()
   
    useEffect(()=>{
        if(localStorage.getItem('user')){
         navigate("/")
        }
     },[])


    const [user,setUser]=useState({
        
        email: "",
        password: ""
        
    })
 
    const handleChange =e => {
       const { name, value } =e.target
      
      setUser({
          ...user,
          [name]: value
      })   
 
 }


 
var success;

 const login =() =>{
   
    axios.post("http://localhost:9008/login", user)
    .then(res=>res.data.message=="Logged in successfully"? success=0 :success=1 )
        .then(res=> alert(res.data.message))
        if(success==0){
            localStorage.setItem('user', JSON.stringify(user.email))
            alert("Logged in Successfully")
            navigate('/')
        } else if(success==1){
            alert("user not registered")
        } else{
            document.getElementById("myCheck").click();
        }

 }

    return (
       <div className="mt-2 row loginbg">
           <div className=" col-8">
            <Slide/>
        </div>
        <div className=" col-1 login ">
            <h1> <img className="img1" src={'/images/carbg.png'}/>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} ></input>
            <div id="myCheck" className="d-grid gap-2 btn btn-warning logbtn"  onClick={login}>Login</div>

            
            <div>or</div>
           
            <Buttons name="Register" className="d-grid gap-2 btn btn-warning logbtn " />
        </div>
        
        </div>
    )
}

export default Login