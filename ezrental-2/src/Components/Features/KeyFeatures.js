import React from "react";
import Featurescard from "./Featurescard";


function KeyFeatures() {
    return (
        <div id="keyfeatures">
            <h3>Taking care of every client</h3>
            <h1>Key Features</h1>
            <h2>We are all about are client's comfort and safety.That's why we provide best service to you.</h2>
            <div className="row">
                <Featurescard url="/images/Keyfeatures/24.png" title="24 Hour car delivery" />

                <Featurescard url="/images/Keyfeatures/service.png" title="24/7 technical support" />

                <Featurescard url="/images/Keyfeatures/premium.png" title="All models have a premium package" />

                <Featurescard url="/images/Keyfeatures/gps.png" title="In-built GPS" />

            </div>
        </div>
    )
}
export default KeyFeatures;