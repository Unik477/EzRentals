import React, { useState } from "react";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Vehicles from "./Components/VehiclesFleet/Vehicles";
import KeyFeatures from "./Components/Features/KeyFeatures";
import Login from "./Components/Login/Login";

function App() {

  return (
    <div>
     
      <Home />
       {/* <Login/>  */}
      
    </div>
  );
}

export default App;
