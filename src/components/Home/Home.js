import React, { useEffect, useState } from "react";
import About from "../About/About";
import Contact from "../ContactUs/Contact";
import Services from "../Services/Services";
import './Home.css';
import Banner from "../Banner/Banner";
const Home = () => {
     const [services, serServices] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
        .then((res) => res.json())
        .then((data) => serServices(data))
    }, []); 
    return (  
    <><div>
     <Banner></Banner>
      </div><section id="team">
          <div className="col user-container my-3 py-5 text-center">
            <div className="row gy-5">s
              {services.map(service => <Services key={service.key}
                service={service}></Services>
              )}
            </div>
          </div>
          <div>
          </div>
           <About></About>
          <Contact></Contact>
        </section></>
  );
};

export default Home;