import React, {useState} from "react";
import axios from "axios";

const Contact = () => {

    const[ contact, setContact] = useState({
        name:"",
        email:"",
        mobile:"",
        altMobile:"",
        city:"",
        state:"",
        zip:""
    })

    const handleChange = e=>{
        
        const {name, value}= e.target
        // console.log(name,value)

       setContact({
           ...contact,
           [name]: value
       })

    }

    const contactus =()=>{
        const{name,email,mobile,altMobile,city,state,zip}= contact
        if(name && email && mobile && altMobile && city && state && zip){
            
            axios.post("http://localhost:9008/contactus", contact)
            .then(res=>console.log(res))
            alert(" Dear User Your Requested has been sent!\n We'll contact you soon.. \n Thank You :) ")
        } else{
            alert("fill all feilds")
        }
       
    }

  return (
    <>
   
      <h3 className="mt-5 ms-5 text-start">Conatct Us</h3>
      <form className="mt-5 ms-5 me-5">
        <div className="row">
          <div className="form-group col-lg-6 col-md-6">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
name="name"
value={contact.name}
onChange={handleChange}
              className="form-control"
              id="inputName"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group col-lg-6 col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
name="email"
value={contact.email}
onChange={handleChange}
              className="form-control"
              id="inputEmail"
              placeholder="Enter Your e-mail id"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-lg-6">
            <label htmlFor="inputMobile">Mobile No.</label>
            <input
              type="text"
name="mobile"
value={contact.mobile}
onChange={handleChange}
              className="form-control"
              id="inputMobile"
              placeholder="Enter Your Mobile Number"
            />
          </div>

          <div className="col-lg-6">
            <label htmlFor="inputAltMobile">Alt. Mobile No.</label>
            <input
              type="text"
name="altMobile"
value={contact.altMobile}
onChange={handleChange}
              className="form-control"
              id="inputAltMobile"
              placeholder="Enter Your Alternate Mobile Number"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-4 col-lg-4">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
name="city"
value={contact.city}
onChange={handleChange}
              className="form-control"
              id="inputCity"
              placeholder="Enter Your City"
            />
          </div>
          <div className="form-group col-md-4 col-lg-4">
            <label htmlFor="inputState">State</label>
            <input
              type="text"
name="state"
value={contact.state}
onChange={handleChange}
              className="form-control"
              id="inputState"
              placeholder="Enter Your State"
            />
          </div>
          <div className="form-group col-md-4 col-lg-4">
            <label htmlFor="inputZip">Zip</label>
            <input
              type="text"
            name="zip"
            value={contact.zip}
            onChange={handleChange}
              className="form-control"
              id="inputZip"
              placeholder=" Enter Your Area Zip Code"
            />
          </div>
        </div>
        <button onClick={contactus} type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </>
  );
}

export default Contact;
