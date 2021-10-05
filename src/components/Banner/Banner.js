import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6">
            <h2 className="title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, magnam facere esse.
            </h2>
            <p className="text-white text-center mt-3">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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