import React from "react";
import Button from "../Button/Buttons";
import VehicleCard from "./VehicleCard"
import VehicleFleetStarter from "./VehicleFleetStarter";
function Vehicles() {
    return (
        <div>
            <VehicleFleetStarter />

            <div className="row Vehiclecardone ms-2">
                <VehicleCard className="col-lg-4 col-md-4 col-sm-4 col-4" imgClassName="carCardOne" url="/images/Cars/zachary.png" />
                <VehicleCard className="col-lg-4 col-md-4 col-sm-4 col-4" imgClassName="carCardOne" url="/images/Cars/brandon.png" />
                <VehicleCard className="col-lg-4 col-md-4 col-sm-4 col-4" imgClassName="carCardOne" url="/images/Cars/spencer.png" />

            </div>
            <div className="row Vehiclecardtwo ms-2">
                <VehicleCard className="col-lg-3 col-md-3 col-sm-3 col-3" imgClassName="carCardTwo" url="/images/Cars/josh.png" />
                <VehicleCard className="col-lg-3 col-md-3 col-sm-3 col-3" imgClassName="carCardTwo" url="/images/Cars/alec.png" />
                <VehicleCard className="col-lg-3 col-md-3 col-sm-3 col-3" imgClassName="carCardTwo" url="/images/Cars/adrian.png" />
                <VehicleCard className="col-lg-3 col-md-3 col-sm-3 col-3" imgClassName="carCardTwo" url="/images/Cars/aaron.png" />

            </div>
            <div className="showmorebutton">
                <Button className="btn btn-light btn-lg" name="Show More" type="submit" id="showmore" />
            </div>
        </div>
    )
}

export default Vehicles; 