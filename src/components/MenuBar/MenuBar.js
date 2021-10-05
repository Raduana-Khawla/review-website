import React from "react";
import "./MenuBar.css";
import { Link } from 'react-router-dom';
const MenuBar = () =>{
    return(
        <div className="display">
        <div><img className="img-fluid w-100 logo" src="https://i.ibb.co/XXK1fjk/Madrasah-logo.png"/></div>
        <div className="pt-3">
        <span className="title">Darul Ikra Model Madrasa</span>
        <p className="sub-title pt-3 mt-3 text-black">Methikanda, Raipura, Narsingdi.</p>
        </div>
           <div className="pt-3 ps-5"><Link to="/home">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/services">Services</Link>
           <Link to="/contact">Contact Us</Link></div>
        </div>
    );
}

export default MenuBar;