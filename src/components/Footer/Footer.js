import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
  <footer className="mt-5">
      <div>
      <div className="row">
      <div className="col">
      <div><img className="img-fluid w-50" src="https://i.ibb.co/XXK1fjk/Madrasah-logo.png"/></div>
      <p>
      The name of our Madrasah is Darul Ikra Model Madrasa. It stands on the junction of some roads connecting different parts of the locality. So the students can attend the Madrasah without any difficulty.
     </p>
      </div>
      <div className="col">
        <h3>Office <div className="underline"><span></span></div></h3>
        <p>Raipura Road</p>
        <p>Mathikanda, Raipura</p>
        <p>Narsingdi, Dhaka</p>
        <p className="email-id">raduanakhawla468@gmail.com</p>
        <h4>+91 - 2335454</h4>
      </div>
      <div className="col">
        <h3>Link <div className="underline"><span></span></div></h3>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>
      <div className="col">
        <h3>NewsLetter <div className="underline"><span></span></div></h3>
        <form>
          <i className="far fa-envelope"></i>
          <input type="email" placeholder="Enter Your email id" required />
          <button type="submit"><i className="fas fa-arrow-right"></i></button>
        </form>
        <div className="social-icon">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-facebook-f"></i>
         </div>
      </div>
       </div>
       <hr />
       <p className="copyright">Darul Ikra Model Madrasa © 2021</p>
    </div>
  </footer>
           );
          };
          
          export default Footer;    
        