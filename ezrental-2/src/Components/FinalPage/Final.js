
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Buttons from "../Button/Buttons"
import "./Final.css"

export default function() {

   const navigate=useNavigate()
   
    useEffect(()=>{
        if(!localStorage.getItem('user')){
         navigate("/")
        }
     },[])


    function clear(){
        localStorage.removeItem('carName');
    }

    return(
         <>
       <main className="container mt-4 ">
    <h1 className="d-flex justify-content-center">Thank You For Using EZrentals !!</h1>
    <h2 className="d-flex justify-content-center  success ">Car Booked Successfully</h2>
    <p class="lead ">We will send you the updates on the E-mail/Mobile No.  provided by you within 10 minutes. </p>
    <p class="lead ">For queries call us on +91 9651606642 </p>
    <p class="lead">
    <Link onClick={clear} to="/" className="btn btn-warning butt" >Continue..</Link>
    </p>
    </main>
    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </>
    )
}
