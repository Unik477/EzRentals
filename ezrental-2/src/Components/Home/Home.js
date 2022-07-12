import React from "react";
import HomeCard from "./HomeCard";
import Button from "../Button/Buttons"
import Vehicles from "../VehiclesFleet/Vehicles";
import KeyFeatures from "../Features/KeyFeatures";
import OfferCard from "../Offers/OfferCard";
import Slide from "../Offers/Slide"

function Home() {

   
    return (
        <>
         
        <div className="container-fluid" id="home">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <img src={process.env.PUBLIC_URL + '/images/carbg.png'} alt="loading" className="homeimg" />
                   
                </div>
                <div className="col-lg-6  col-md-6 col-sm-6 col-6 homeheadings">
                    <h1>Want a car on rent?</h1>
                    <h3>Book it here</h3>
                    <hr />
                    <div className="col-lg-12 custom-btn">
                        <div className="row">
                            <Button className="btn btn-md btn-primary ms-2 homebutton" divclassname="col-lg-6 col-md-6 col-sm-6 col-6 os" name="Our Services" />
                            <Button className="btn btn-md btn-danger homebutton" name="Make a booking" divclassname="col-lg-6 col-md-6 col-sm-6 col-6  mb" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row homecardrow">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                    <HomeCard title="Safe Rides" imgurl="/images/Homecard/saferides.png" />

                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                    <HomeCard title="Tested Vehicles" imgurl="/images/Homecard/car-test.png" />

                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">

                    <HomeCard title="On Time Delivery" imgurl="/images/Homecard/taxi-time.png" />
                </div>
            </div>
        </div>
        <Vehicles />
        <br/><br/><br/><br/>
        <Slide/>
        <br/><br/><br/>
        
      <div className="container row d-flex justify-content-center offercard1">
      <hr />
      <OfferCard  code="GET40"  url="/images/OfferCard/offer40.jpg"/>
      <OfferCard code="EZRENTAL250"  url="/images/OfferCard/offer250.jpg"/>
      <OfferCard code="GET300" url="/images/OfferCard/offer300.jpg"/>
      <OfferCard code="NEW500" url="/images/OfferCard/offer500.jpg"/>
      </div>

      <KeyFeatures />

     </>
        )
}
export default Home;