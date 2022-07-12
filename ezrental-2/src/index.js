import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from './Components/About/About';
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer";
import Suv from "./Components/VehiclesFleet/SelectedVehiclesGroup/Suv";
import Premium from "./Components/VehiclesFleet/SelectedVehiclesGroup/Premium";
import Luxury from "./Components/VehiclesFleet/SelectedVehiclesGroup/Luxury";
import Sports from "./Components/VehiclesFleet/SelectedVehiclesGroup/Sports";
import Supercar from "./Components/VehiclesFleet/SelectedVehiclesGroup/Supercar";
import ScrollToTop from "./ScrollToTop ";
import Services from './Components/OurServices/Services';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Checkout from "./Components/Checkout/Checkout"
import Payment from './Components/Payment/Payment';
import Final from './Components/FinalPage/Final';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contactus" element={<Contact />} />
        <Route exact path="Show%20More" element={<Luxury />} />
        <Route exact path="SUV" element={<Suv />} />
        <Route exact path="Sports" element={<Sports />} />
        <Route exact path="SuperCars" element={<Supercar />} />
        <Route exact path="Luxury" element={<Luxury />} />
        <Route exact path="Premium" element={<Premium />} />
        <Route exact path="Our%20Services" element={<Services/>} />
        <Route exact path="Login" element={<Login/>}/>
        <Route exact path="Register" element={<Register/>}/>
        <Route exact path="Checkout" element={<Checkout/>}/>
        <Route exact path="Payment" element={<Payment/>}/>
        <Route exact path="Confirm%20Booking" element={<Final/>}/>
        <Route exact path="Make%20a%20booking" element={<Luxury/>}/>
        
      </Routes>
      <Footer />
    </ScrollToTop>
  </BrowserRouter>
  , document.getElementById('root')
);
