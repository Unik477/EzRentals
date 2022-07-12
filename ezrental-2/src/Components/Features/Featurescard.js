import React from "react";

function Featurescard(props) {
    return (
        <div className="featurecard me-3 ms-2">
            <div className="col-lg-3">
                <img className="featureimg" src={process.env.PUBLIC_URL + `${props.url}`} alt="loading" />
                <h4 className="featureh4">{props.title}</h4>
            </div>
        </div>
    )
}

export default Featurescard;