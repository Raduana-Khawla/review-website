import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'
const Contact=()=>{
  return(
   <div className="body">
      <div className="contact-section">
   <div className="contact-info">
  <div>
  <i className="fas fa-map-marker-alt"></i>Address, city, country
  </div>
  <div>
  <i className="fas fa-envelope"></i>contact@gmail.com
  </div>
  <div>
  <i className="fas fa-phone"></i>+00 0000 000 000
  </div>
  <div>
  <i className="fas fa-clock"></i>Sat-Fri 8:00 AM to 5:00 PM
  </div>
  <div className="contact-form">
      <h2>Contact Us</h2>
      <form className="contact" action="">
        <input type="text" name="name" className="text-box"
        placeholder="Your Name" />
        <input type="email" name="email" className="text-box"
        placeholder="Your Email" />
        <textarea name="message" cols="30" rows="5" placeholder="Your Message" required></textarea>
       <input type="submit" name="submit" className="send-btn" value="send"/>
      </form>
  </div>
</div>
    </div>
    </div>
  )
}
   
export default Contact;