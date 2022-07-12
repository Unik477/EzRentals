import React from "react";
import {   NavDropdown } from 'react-bootstrap'
import { Outlet, Link, useNavigate } from "react-router-dom";
import Buttons from "../Button/Buttons";


function Navbar() {
    const navigate=useNavigate()
    const user= JSON.parse(localStorage.getItem('user'))

    function logout(){
        let confirmAction = window.confirm("You are logging out, are you sure?");
        if (confirmAction) {
        localStorage.clear();
        alert("Logged out Successfully");
        navigate("/login")
        } else {
          alert("Action canceled");
        }
        
    }

  return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5 custom-color" to="/"><img alt="Logo" src={process.env.PUBLIC_URL +"/images/ezRentals.png"} width="191" height="60" className="mt-3 ms-3 navlogo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" id="hamburger"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="ms-2 nav-link  custom-color " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-2  custom-color " to="/about" >About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-2  custom-color "  to="/contactus">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex me-5">
                            {
                                localStorage.getItem('user') ?
                                <>
                                {/* <div className="signed">Signed in As-</div>  */}
                                <div className="avatar"><img className=" ms-2 avatar" src={process.env.PUBLIC_URL +"/images/avatar1.png"}></img></div>
                                <NavDropdown title={user && user}>
                                    <NavDropdown.Item  className=" p-1 " onClick={logout}><img  className=" ms-2 dropitems" src={process.env.PUBLIC_URL +"/images/logout.png"}></img> Logout</NavDropdown.Item>
                                
                                </NavDropdown>
                                
                                </> :

                                <>
                                <Buttons name="Login" className="btn btn-outline-dark  ms-1 custom-color" type="submit" id="custom-color"/>
                            <Buttons name="Register" className="btn btn-outline-dark ms-3 custom-color" type="submit"/>
                            </>
                            }
                            
                           
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet />

        </div>
    )
}

export default Navbar;