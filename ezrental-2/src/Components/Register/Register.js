import React, { useState,useEffect } from "react"
import "./Register.css"
import Buttons from "../Button/Buttons";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Slide from "../Offers/Slide";

const Register = () => {
   
    const navigate=useNavigate()
    
    useEffect(()=>{
       if(localStorage.getItem('user')){
        navigate("/")
       }
    },[])

    

   const [user,setUser]=useState({
       name: "",
       email: "",
       password: "",
       reEnterPassword: ""
   })

   const handleChange =e => {
      const { name, value } =e.target
    //   console.log(name, value)
     setUser({
         ...user,
         [name]: value
     })   

}

   const register= () => {
    const {name, email,password, reEnterPassword}= user
    if(name && email && password && (password== reEnterPassword)){
        // alert("posted")
         axios.post("http://localhost:9008/register",user)
        //  .then(res => console.log(res))
        .then(res => alert(res.data.message))
         navigate("/login")
    }
    else{
        alert("enter valid feilds")
    }
       
   }

    return (

        <div className="mt-2 row loginbg">

        <div className=" col-8">
            <Slide/>
        </div>

        <div className=" col-1 register">
           
           <h1> <img className="img1" src={'/images/carbg.png'}/>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password"value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="d-grid gap-2 btn btn-warning logbtn" onClick={register} >Register</div>
            {/* <Buttons name="Register" className="d-grid gap-2 btn btn-warning" onClick={register}/> */}
            <div>or</div>
            {/* <div className="button" >Login</div> */}
            <Buttons name="Login" className="d-grid gap-2 btn btn-warning logbtn" />
        </div>
        </div>
    )
}

export default Register