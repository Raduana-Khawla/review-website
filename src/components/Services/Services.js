import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Services.css';
const Services=(props)=>{
 const{name, img,price,key,category}=props.service;
//  console.log(props.service);
  return(
    <div>
    {/* <div class="header">
    <h1>Reliable, efficient delivery</h1>
    <h1>Powered by Technology</h1>

    <p>Our Artificial Intelligence powered tools use millions of project data points
      to ensure that your project is successful</p>
  </div> */}
  <div className="row1-container">
    <div className="box box-down cyan">
      <h1>{name}</h1>
      <h3>{category}</h3>
      <h4>{price}</h4>
      <img  src={img} alt="" className="img-fluid rounded-circle w-100 mb-3"/>
    </div>
  <div class="box red">
    <h1>{name}</h1>
      <h3>{category}</h3>
      <h4>{price}</h4>
      <img  src={img} alt="" className="img-fluid rounded-circle w-100 mb-3"/>
    </div>

    <div class="box box-down blue">
    <h1>{name}</h1>
      <h3>{category}</h3>
      <h4>{price}</h4>
      <img  src={img} alt="" className="img-fluid rounded-circle w-100 mb-3"/>
    </div>
  </div>
  <div class="row2-container">
    <div class="box orange">
    <h1>{name}</h1>
      <h3>{category}</h3>
      <h4>{price}</h4>
       <img  src={img} alt="" className="img-fluid rounded-circle w-100 mb-3"/>
    </div>
  </div> 
  </div>
  
  );
};
export default Services;

