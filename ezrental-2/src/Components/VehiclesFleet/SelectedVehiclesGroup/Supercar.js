import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import VehicleCard from "../VehicleCard";
import VehicleFleetStarter from "../VehicleFleetStarter";
import ChooseBtn from "./ChooseBtn";
function Supercar() {
    const [ChoosenCar, setChoosenCar] = useState("Choose A Car");

    function clickHandler(carname, carUrl){
       
       console.log(carname,carUrl)
       localStorage.setItem('carName', JSON.stringify([carname,carUrl,"6500"]))
       setChoosenCar("Proceed with "+carname)
    }
   
    
    return (

       
        <>
            <VehicleFleetStarter />

            <div className="row Vehiclecardone">
               <button  className=" col-lg-4 col-md-4 col-sm-6 col-6 carBtn"  onClick={() => clickHandler('Supercar1',"/images/Supercar/su1.jpg")}> <VehicleCard  imgClassName="carCardOne" url="/images/Supercar/su1.jpg"  /> </button>
               <button   className="col-lg-4 col-md-4 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Supercar2',"/images/Supercar/su2.jpg")}> <VehicleCard  imgClassName="carCardOne" url="/images/Supercar/su2.jpg" /></button>
                <button  className="col-lg-4 col-md-4 col-sm-12 col-12 carBtn" onClick={() => clickHandler('Supercar3',"/images/Supercar/su3.jpg")}><VehicleCard imgClassName="carCardOne" url="/images/Supercar/su3.jpg" /> </button>

            </div>
            <div className="row Vehiclecardtwo">
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Supercar4',"/images/Supercar/su4.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Supercar/su4.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Supercar5',"/images/Supercar/su5.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Supercar/su5.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Supercar6',"/images/Supercar/su6.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Supercar/su6.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Supercar7',"/images/Supercar/su7.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Supercar/su7.jpg" /> </button>
            </div>
            <div className="text-center">
                <br></br>
            <h1></h1>
            <ChooseBtn car={ChoosenCar}/>
            
            </div></>
    )
}

export default Supercar;