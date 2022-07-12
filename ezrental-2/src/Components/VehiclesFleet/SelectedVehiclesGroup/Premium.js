import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import VehicleCard from "../VehicleCard";
import VehicleFleetStarter from "../VehicleFleetStarter";
import ChooseBtn from "./ChooseBtn";

function Premium() {
    const [ChoosenCar, setChoosenCar] = useState("Choose A Car");

    function clickHandler(carname, carUrl){
       
       console.log(carname,carUrl)
       localStorage.setItem('carName', JSON.stringify([carname,carUrl,"4500"]))
       setChoosenCar("Proceed with "+carname)
    }
   
    
    return (

       
        <>
            <VehicleFleetStarter />

            <div className="row Vehiclecardone">
               <button  className=" col-lg-4 col-md-4 col-sm-6 col-6 carBtn"  onClick={() => clickHandler('Premium_1',"/images/Premium/P1.jpg")}> <VehicleCard  imgClassName="carCardOne" url="/images/Premium/P1.jpg"  /> </button>
               <button   className="col-lg-4 col-md-4 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Premium_2',"/images/Premium/P2.jpg")}> <VehicleCard  imgClassName="carCardOne" url="/images/Premium/P2.jpg" /></button>
                <button  className="col-lg-4 col-md-4 col-sm-12 col-12 carBtn" onClick={() => clickHandler('Premium_3',"/images/Premium/P3.jpg")}><VehicleCard imgClassName="carCardOne" url="/images/Premium/P3.jpg" /> </button>

            </div>
            <div className="row Vehiclecardtwo">
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Premium_4',"/images/Premium/P4.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Premium/P4.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Premium_5',"/images/Premium/P5.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Premium/P5.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Premium_6',"/images/Premium/P6.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Premium/P6.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Premium_7',"/images/Premium/P7.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Premium/P7.jpg" /> </button>
            </div>
            <div className="text-center">
                <br></br>
            <h1></h1>
            <ChooseBtn car={ChoosenCar}/>
            
            </div></>
    )
}

export default Premium;