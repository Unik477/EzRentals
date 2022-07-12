import React from 'react';


function HomeCard(props){
    return (
        <div className="col-lg-4 col-md-6">
             <div className="homecard">
                <h2>{props.title}</h2>
                <img src={process.env.PUBLIC_URL + `${props.imgurl}`} alt="loading" />
             </div>
        </div>
    )
}

export default HomeCard;