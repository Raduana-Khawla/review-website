import React from "react";
 import logo from "../..//images/logo/Madrasah logo.png";
import "./MenuBar.css";
import { NavLink } from 'react-router-dom';

const MenuBar = () =>{
    return(
        <div className="display">
        <div>
        <img className="logo" src={logo} alt="" />
        </div>
        <div>
        <span  className="songgothon">Darul Ikra Model Madrasa</span>
        <p className="program mt-3"><small>Methikanda,Raipura,Narsingdi.</small></p>
        </div>
           <NavLink to="/home">Home</NavLink>
           <NavLink to="/about">About</NavLink>
           <NavLink to="/services">Services</NavLink>
           <NavLink to="/contact">Contact Us</NavLink>
        </div>
    );
}

export default MenuBar;