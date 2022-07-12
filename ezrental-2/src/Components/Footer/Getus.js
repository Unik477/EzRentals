import React from "react";

function Getus() {
    return (
        <>
             <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                    <h4 className="footerh4">ezrentals@gmail.com</h4>
                    <hr className="tophr" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                    <h2 className="ms-2 footerh2">Get us on</h2>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                    <h4 className="footerh4" >+9878965423</h4>
                    <hr className="bottomhr" />
                    <h4 className="footerh4" >24/7</h4>

                </div>
            </div>
            <div className="icon-margin">
                <img className="footericons ms-3" alt="loading" src={process.env.PUBLIC_URL + "/images/Footericons/facebook.png"} />

                <img className="footericons ms-3" alt="loading" src={process.env.PUBLIC_URL + "/images/Footericons/twitter.png"} />
                <img className="footericons ms-3" alt="loading" src={process.env.PUBLIC_URL + "/images/Footericons/instagram.png"} />

                <img className="footericons ms-3" alt="loading" src={process.env.PUBLIC_URL + "/images/Footericons/gmail.png"} />

                <img className="footericons ms-3" alt="loading" src={process.env.PUBLIC_URL + "/images/Footericons/linkedin.png"} />

                <img className="footericons ms-3" alt="loading" src={process.env.PUBLIC_URL + "/images/Footericons/vimeo.png"} />
            </div>
        </>
    )
}


export default Getus;