import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import VehicleCard from "../VehicleCard";
import VehicleFleetStarter from "../VehicleFleetStarter";
import ChooseBtn from "./ChooseBtn";
function Suv() {
    const [ChoosenCar, setChoosenCar] = useState("Choose A Car");

     function clickHandler(carname, carUrl){
        
        console.log(carname,carUrl)
        localStorage.setItem('carName', JSON.stringify([carname,carUrl,"2500"]))
        setChoosenCar("Proceed with "+carname)
     }
   
    
    return (

       
        <>
            <VehicleFleetStarter />

            <div className="row Vehiclecardone">
               <button  className=" col-lg-4 col-md-4 col-sm-6 col-6 carBtn"  onClick={() => clickHandler('SUV1',"/images/SUV/suv1.jpg")}> <VehicleCard  imgClassName="carCardOne" url="/images/SUV/suv1.jpg"  /> </button>
               <button   className="col-lg-4 col-md-4 col-sm-6 col-6 carBtn" onClick={() => clickHandler('SUV2',"/images/SUV/suv2.jpg")}> <VehicleCard  imgClassName="carCardOne" url="/images/SUV/suv2.jpg" /></button>
                <button  className="col-lg-4 col-md-4 col-sm-12 col-12 carBtn" onClick={() => clickHandler('SUV3',"/images/SUV/suv3.jpg")}><VehicleCard imgClassName="carCardOne" url="/images/SUV/suv3.jpg" /> </button>

            </div>
            <div className="row Vehiclecardtwo">
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('SUV4',"/images/SUV/suv4.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/SUV/suv4.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('SUV5',"/images/SUV/suv5.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/SUV/suv5.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('SUV6',"/images/SUV/suv6.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/SUV/suv6.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('SUV7',"/images/SUV/suv7.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/SUV/suv7.jpg" /> </button>
            </div>
            <div className="text-center">
                <br></br>
            <h1></h1>
            <ChooseBtn car={ChoosenCar}/>
            
            </div></>
    )
}

export default Suv;