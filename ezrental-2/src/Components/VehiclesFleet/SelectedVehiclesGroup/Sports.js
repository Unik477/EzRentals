import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import VehicleCard from "../VehicleCard";
import VehicleFleetStarter from "../VehicleFleetStarter";
import ChooseBtn from "./ChooseBtn";
function Sports() {
    const [ChoosenCar, setChoosenCar] = useState("Choose A Car");

    function clickHandler(carname, carUrl){
       
       console.log(carname,carUrl)
       localStorage.setItem('carName', JSON.stringify([carname,carUrl,"5550"]))
       setChoosenCar("Proceed with "+carname)
    }
   
    
    return (

       
        <>
            <VehicleFleetStarter />

            <div className="row Vehiclecardone">
               <button  className=" col-lg-4 col-md-4 col-sm-6 col-6 carBtn"  onClick={() => clickHandler('Sportscar1',"/images/Sportscar/sc1.jpg")}> <VehicleCard  imgClassName="carCardOne" url="/images/Sportscar/sc1.jpg"  /> </button>
               <button   className="col-lg-4 col-md-4 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Sportscar2',"/images/Sportscar/sc2.jpg")}> <VehicleCard  imgClassName="carCardOne" url="/images/Sportscar/sc2.jpg" /></button>
                <button  className="col-lg-4 col-md-4 col-sm-12 col-12 carBtn" onClick={() => clickHandler('Sportscar3',"/images/Sportscar/sc3.jpg")}><VehicleCard imgClassName="carCardOne" url="/images/Sportscar/sc3.jpg" /> </button>

            </div>
            <div className="row Vehiclecardtwo">
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Sportscar4',"/images/Sportscar/sc4.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Sportscar/sc4.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Sportscar5',"/images/Sportscar/sc5.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Sportscar/sc5.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Sportscar6',"/images/Sportscar/sc6.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Sportscar/sc6.jpg" /> </button>
            <button className="col-lg-3 col-md-3 col-sm-6 col-6 carBtn" onClick={() => clickHandler('Sportscar7',"/images/Sportscar/sc7.jpg")}><VehicleCard imgClassName="carCardTwo" url="/images/Sportscar/sc7.jpg" /> </button>
            </div>
            <div className="text-center">
                <br></br>
            <h1></h1>
            <ChooseBtn car={ChoosenCar}/>
            
            </div></>
    )
}

export default Sports;