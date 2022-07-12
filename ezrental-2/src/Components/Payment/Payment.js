import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import Buttons from "../Button/Buttons";
import { bill } from  "../Checkout/Checkout"
import moment from 'react-moment';
import {useLocation, useNavigate} from 'react-router-dom';

export default function Payment(props){
  
  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('user')){
     navigate("/")
    }
 },[])
 
  const location = useLocation();

  //date & time
  let date = new Date().toUTCString().slice(5, 16);
  let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
  let DT= JSON.parse(localStorage.getItem("DT"));
 


  const [carname, setCarname] = useState("");

useEffect(() => {
  const carname = JSON.parse(localStorage.getItem('carName'));
  if (carname) {
   setCarname(carname);
  }
}, []);




    return(
       
        <div class="container mt-4 ">
            <div className="row">
            
    
    <div className="col-6">
    
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text">Order Summary</span>
          
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">{carname[0]}</h6>
              <small class="text-muted">Unlimited Kilometers without fuel</small>
            </div>
            <span class="text-muted">₹{carname[2]}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">*GST</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">₹800</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">Delivery Charges</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">₹150</span>
          </li>
          <li class="list-group-item d-flex justify-content-between bg-light">
            <div class="text-success">
              <h6 class="my-0">Promo code</h6>
            </div>
            <span class="text-success">-{location.state.pc}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total </span>
            <strong>₹{location.state.totalA}</strong>
          </li>
        </ul>
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text">Payment Options</span>
          
        </h4>
        <form class=" card p-3">
          <div class="input-group text-dark">
          <div class="  form-check ">
  <input class=" form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label " for="flexRadioDefault1">
    Cash On Delivery 
  </label>
  
</div> 
<div class="form-check mt-4">
      <input class="form-check-input" type="checkbox" id="gridCheck" required/>
      <label class="form-check-label" for="gridCheck">
        I agree the terms and conditions mentioned on the website.
      </label>
    </div>
          </div>
<div class=" mt-4 d-grid gap-2  ">
  <Buttons  name="Confirm Booking" className="btn btn-warning" />
 
</div>
        </form>
      </div>

      <div className="col-6">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text">Delivery details</span>
          
        </h4>
        <Card className='mb-4 bg-light'  >
        <div className='row '>
        <div className='col-6'>
      <Card.Img  src={process.env.PUBLIC_URL + `${carname[1]}`} />
      <span class=" text-success mt-2 mb-2  badge clean">You will get a clean and sanitized car.</span>
        </div>
    
      <div className='col-6'>
      <Card.Body >
        <Card.Title className=' text-dark'>{carname[0]}</Card.Title>
        <Card.Text className='text-dark'>  
        <Icon.Broadcast className="text-success"/>  {date} ({time}) <br />
     
        <Icon.ThreeDotsVertical/> <br />
        <Icon.Broadcast className="text-danger"/> {DT[0]} ({DT[1]}) <br /> <br />
     
        <Icon.StarFill className="text-warning"/> 4.8(19)<br></br>
        <Icon.DoorClosedFill className="text-danger"/>  Unlimited Kms Without Fuel<br></br>
         
        </Card.Text>
        {/* <span class="badge clean">You will get a clean and sanitized car.</span> */}
      </Card.Body>
      </div>
    
        </div>
    </Card>
    </div>
    </div>
    </div>
    
    )
}