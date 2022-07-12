import React from "react";

import KeyFeatures from "../Features/KeyFeatures";

function About() {
    return (
        <>
        <div >
            <h1 className="container-fluid About text-center mt-5">About us</h1>
            <p className="Aboutptag mt-5 ms-5">
                We are the best car rental website in India. Car rental from EzRentals
                provides the flexibility of having a car anytime you want, as well as
                the assurance of a sanitized and virus free vehicle for your own self
                drive. The car sanitization process encompasses all the preventive
                hygiene best practices directed by the World Health Organization (WHO)
                and is diligently conducted for each vehicle delivered to the car
                subscribers. The safety measures that are implemented consist of:
                <ul>
                    <li>
                        Industrial standards sanitization and disinfection before delivery
                        for all surfaces of the vehicle
                    </li>
                    <li>
                        Drivers wear Personal Protective Equipment (PPE) including masks and
                        gloves while delivering the cars
                    </li>
                    <li>Paperless agreements for minimum contact</li>
                    <li>Upon return, digital receipt sent to the customer’s e-mail.</li>
                </ul>
            </p>
        </div>
        <KeyFeatures/>
       </>
    )
}

export default About;