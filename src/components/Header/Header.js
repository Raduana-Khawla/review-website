import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../..//images/logo/Madrasah logo.png';
import Banner from "../Banner/Banner";
import MenuBar from "../MenuBar/MenuBar";
import './Header.css';

const Header = () =>{
    return(
            <div> 
            <MenuBar></MenuBar>
            <Banner></Banner>
            </div>
         
       
    );
};

export default Header;