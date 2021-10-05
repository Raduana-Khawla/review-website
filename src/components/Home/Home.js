import React, { useEffect, useState } from "react";
import About from "../About/About";
import Contact from "../ContactUs/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import './Home.css';

const Home = () => {
  

     const [services, setServices] = useState([]);
     const [about, setAbout] = useState([]);
  
    useEffect(() => {
        fetch('./tools.JSON')
        .then((res) => res.json())
        .then((data) => 
          setServices(data)
          // setTeams(data)}
          )
        
    }, []);
    const  handleAddToCart = (service)=>
    {
        const newCart = [...about, service];
      setAbout(newCart);
    }
    return (
     
// console.log(cart);
<div>
    <div>
    <Header></Header>
       {services.map(service=> 
       <Services key={service.key}
       service={service}
       handleAddToCart=
       {handleAddToCart}>
       </Services>)}
    </div>

    <div>
    <About></About>
    <Contact></Contact>
    <Footer></Footer>
  </div>
  </div>
  );
};

export default Home;