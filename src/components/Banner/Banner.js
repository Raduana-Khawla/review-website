import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container ">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6">
            <h2 className="title">
            Hold fast to the rope of Allah, do not be separated.
            </h2>
            <p className="text-white text-center mt-3">
            Madrasa is the living form of an educational system which thrived in the past.In this way, the madrasa education initiates a social mobilization which encourages social groups that are knit together with the fabric of culture to take part in the religious, political, and revolutionary movements of the country.
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
  );
};
export default Banner;