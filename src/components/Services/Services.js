import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import  './Services.css';
const Services = (props) =>{
    const {name,img,price,category} = props.service;
// fontAwesome
    const cartIcon = <FontAwesomeIcon icon={faArrowRight} />
    return(
<div className="col-md-4 col">
     <div className="card h-100">
         <div className="card-body">
           <img  src={img} alt="" className="img-fluid rounded-circle w-75 mb-3"/>
           <div className="card-text">
           <h4>{name}</h4>
           <h4>{category}</h4>
           <br />
           <h3>price: {price}</h3>
           </div>
          </div>
           <button className="text-uppercase show text-center text-white mt-3 ">
            Add to cart
           </button>
           </div>
       </div>  
    );
};
export default Services;

          