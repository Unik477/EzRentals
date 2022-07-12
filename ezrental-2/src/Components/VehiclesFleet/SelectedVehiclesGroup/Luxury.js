import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import VehicleCard from "../VehicleCard";
import VehicleFleetStarter from "../VehicleFleetStarter";
import ChooseBtn from "../SelectedVehiclesGroup/ChooseBtn"
function Luxury() {
    const [ChoosenCar, setChoosenCar] = useState("Choose A Car");

     function clickHandler(carname, carUrl){
        
        console.log(carname,carUrl)
        localStorage.setItem('carName', JSON.stringify([carname,carUrl,"3550"]))
        setChoosenCar("Proceed with "+carname)
     }
    
    
    
    return (

       
        <>
            <VehicleFleetStarter />

            <div className="row Vehiclecardone">
               <button  className=" col-lg-4 col-md-4 col-sm-6 col-6 carBtn"  onClick={() => clickHandler('Luxury1',"/images/Luxury/L1.jpg")}> <VehicleCard  imgClassName="carCardOne" url="/images/Luxury/L1.jpg"  /> </button>
               <button   className="col-lg-4 col-md-4 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Luxury2',"/images/Luxury/L2.jpg")}> <VehicleCard  imgClassName="carCardOne" url="/images/Luxury/L2.jpg" /></button>
                <button  className="col-lg-4 col-md-4 col-sm-12 col-12 carBtn" onClick={() => clickHandler('Luxury3',"/images/Luxury/L3.jpg")}><VehicleCard imgClassName="carCardOne" url="/images/Luxury/L3.jpg" /> </button>

            </div>
            <div className="row Vehiclecardtwo">
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Luxury4',"/images/Luxury/L4.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Luxury/L4.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Luxury5',"/images/Luxury/L5.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Luxury/L5.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Luxury6',"/images/Luxury/L6.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Luxury/L6.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Luxury7',"/images/Luxury/L7.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Luxury/L7.jpg" /> </button>
            </div>
            <div className="text-center">
                <br></br>
            <h1></h1>
           
            <ChooseBtn car={ChoosenCar}/>
            </div></>
    )
}

export default Luxury;