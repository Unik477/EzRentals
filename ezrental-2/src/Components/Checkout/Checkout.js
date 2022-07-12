import React, { useState , useEffect } from 'react'
import "./Checkout.css"
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import axios from 'axios';


function Checkout(){
  
  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('user')){
     navigate("/")
    }
 },[])

  //billing address deatails state
  const [bill, setBill]= useState({
       firstName: "",
       lastName: "",
       email: "",
       dlNumber: "",
       mobile: "",
       address: "",
       city: "",
       state: "",
       time: "",
       zip: "",
       date: "",
       
  })

  const handleChange=e=>{
    const {name,value}= e.target
    setBill({
      ...bill,
      [name]: value
    })
  }

  



  //carname state
  const [carname, setCarname] = useState("");

useEffect(() => {
  const carname = JSON.parse(localStorage.getItem('carName'));
  if (carname) {
   setCarname(carname);
  }
}, []);


//Prome Code textbox state
const[code, setCode]= useState("")

 // discount on promo applied
const[promoOff,setpromoOff]= useState("")
const[promoStatus,setpromocodeStatus]=useState("Use promo code (if any)")


// total amount calculate

var totalAmount= parseInt( carname[2]) + 800 + 150 ;
 var emergencytotal= totalAmount ;
 var Btotal=emergencytotal;


 //Setting total
const[total,setTotal]=useState("")

const handleRedeem =e => {

  const {value } =e.target
 
 setCode(value)   
 
}

//promo code logic

function Redeem(e){
  e.preventDefault();
    var promocode=document.getElementById("promocode").value
    
    if(promocode=="NEW500")
    {
      setpromocodeStatus(" Promo Code Applied*")
      setpromoOff("500")
      totalAmount=totalAmount-500
      setTotal(totalAmount)
      Btotal=0
    } 
    else if(promocode=="EZRENTAL250"){
      setpromocodeStatus(" Promo Code Applied*")
      setpromoOff("250")
      totalAmount=totalAmount-250
      setTotal(totalAmount)
      Btotal=0
    }
    else if(promocode=="GET300"){
      setpromocodeStatus(" PROMO CODE APPLIED*")
      setpromoOff("300")
      totalAmount=totalAmount-300
      setTotal(totalAmount)
      Btotal=""
    }
    else{
      setpromocodeStatus(" PROMO CODE INVALID*")
      setpromoOff("0")
      totalAmount=emergencytotal
      setTotal("")
      Btotal=emergencytotal
      

    }
    setCode("")
    
    
}

// checkout button logic

const checkout= (e)=>{
  e.preventDefault();
 const{firstName,lastName,email,dlNumber,mobile,address,city,state,time,zip,date}= bill
 
 localStorage.setItem('DT', JSON.stringify([bill.date, bill.time]))
  
 if( (document.getElementById("MyCheck").checked == true) && firstName && lastName && email && dlNumber && mobile && address && city && state && time && zip && date)
 {
   alert("checked out successfully")
   axios.post("http://localhost:9008/Checkout",bill)
   .then(res=> console.log(res))

   //sending data to next page
   if(total==""){
    navigate('/Payment',{state:{pc:promoOff,totalA: Btotal}})
   }else{
    navigate('/Payment',{state:{pc:promoOff,totalA: total}})
   }
   
   
 } 
 else{
  
  alert("fill all details correctly")
 }
}





return(

  <div  class="container mt-4 ">
  
  {/* car details--top */}

    <Card className='mb-4 bg-dark' style={{  }} >
    <div className='row '>
    <div className='col-3'>
  <Card.Img variant="top"  src={process.env.PUBLIC_URL + `${carname[1]}`} />
    </div>

  <div className='col-6'>
  <Card.Body>
    <Card.Title className='text'>{carname[0]}</Card.Title>
    <Card.Text className='text'>
    <Icon.StarFill className="text-warning"/> 4.8(19)<br></br>
        <Icon.DoorClosedFill className="text-danger"/>  Unlimited Kms Without Fuel<br></br>
          <Icon.Speedometer2 className="text-primary"/> 26,230 kms Driven
    </Card.Text>
    <span class="badge clean">You will get a clean and sanitized car.</span>
  </Card.Body>
  </div>

    </div>
</Card>
 <hr></hr>
    
  {/* order summary--right_half */}

    <div class="row ">
      <div class="col-md-4 order-md-2 mb-4 checkoutbg">
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
              <small>{promoStatus}</small>
            </div>
            <span class="text-success">-₹{promoOff}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total </span>
            {
              total=="" ?
              <strong>₹ {Btotal}</strong>
              :
              <strong>₹ {total}</strong>
            } 
                
          </li>
        </ul>
       {/* promo code segment--bottom_right_half */}
        <form class="card p-2">
          <div class="input-group">
            <input onChange={handleRedeem} type="text" class="form-control" id='promocode' value={code} placeholder="Promo code"  autofill-prediction="UNKNOWN_TYPE"/>
            <div class="input-group-append">
              <button  id='redeem' onClick={Redeem}  class="btn btn-success">Redeem</button>
            </div>
          </div>
        </form>
        
      {/* delivery details--left_half       */}
      </div>
      <br></br>
      <div class="col-md-8 order-md-1 checkoutbg">
        <h4 class="mb-3">Delivery address</h4>

        <form>
  <div class="form-row">
  <div className="row">
  <div class=" col-md-6 mb-3">
      <label for="inputFName">First Name</label>
      <input onChange={handleChange} name='firstName' value={bill.firstName} type="name" class="form-control"  placeholder="First Name"/>
    </div>

    <div class=" col-md-6 mb-3">
      <label  for="inputLName">Last Name</label>
      <input onChange={handleChange} name='lastName' value={bill.lastName} type="name" class="form-control"  placeholder="Email"/>
    </div>
    </div>

    <div class="mb-3">
      <label for="inputEmail4">Email</label>
      <input onChange={handleChange} name='email' value={bill.email} type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>

    <div class="mb-3">
      <label for="inputDL">Driving License Number</label>
      <input onChange={handleChange} name='dlNumber' value={bill.dlNumber} type="text" class="form-control" id="inputDL" placeholder="DL number"/>
    </div>
   
    <div class="mb-3">
      <label for="inputPassword4">Mobile No.</label>
      <input onChange={handleChange} name='mobile' value={bill.mobile} type="tel" class="form-control" id="inputNumber" placeholder="Mobile No."/>
    </div>
  </div>
  <div class="mb-3">
    <label for="inputAddress">Address</label>
    <input onChange={handleChange} name='address' value={bill.address} type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  
  <div class="form-row">
    <div class=" mb-3 ">
      <label for="inputCity">City</label>
      <select onChange={handleChange} name='city' value={bill.city} id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Lucknow</option>
        <option>Banaras</option>
        <option>Gonda</option>
        
      </select>
    </div>
    
    <div className="row">

    <div class=" col-md-6 mb-3">
      <label for="inputState">State</label>
      <select onChange={handleChange} name='state' value={bill.state} id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Uttarpradesh</option>

      </select>
    </div>

    <div class=" col-md-6 mb-3">
      <label for="inputCountry">Delivery Time</label>
      <input onChange={handleChange} name='time' value={bill.time} type="time" class="form-control" id="inputTime"/>
    </div>

    <div class=" col-md-6 mb-3">
      <label for="inputZip">Zip</label>
      <input onChange={handleChange} name='zip' value={bill.zip} type="text" class="form-control" id="inputZip"/>
    </div>

    <div class=" col-md-6 mb-3">
      <label for="inputDate">Choose Delivery Date</label>
      <input onChange={handleChange} name='date' value={bill.date} type="date" class="form-control" id="inputDate" required pattern="dd mm yyyy"/>
    </div>

    </div>
  </div>
  <div class="form-group mb-3">
    <div class="form-check">
      <input  class="form-check-input" type="checkbox" id="MyCheck"/>
      <label class="form-check-label" for="gridCheck">
        I agree the terms and conditions mentioned on the website.
      </label>
    </div>
  </div>
  <button onClick={checkout}  type="submit" class="btn btn-primary">Proceed to Payment</button>
</form>
      </div>
    </div>
    
   </div>
  

     
    
  
  )
  
} export default Checkout; 