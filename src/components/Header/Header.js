import React from "react";
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