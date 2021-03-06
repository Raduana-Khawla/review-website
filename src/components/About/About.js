import React from "react";
import './About.css';
const About=()=>{
  return(
    <div className="row style">
      <div className="col-md-6">
      <div className="ms-5 name">
        <h3> <span className="head">Affan Al Jami</span></h3>
        <p>Principal of Darul Ikra Model Madrasa</p>
        </div>
        <div><img className="img-fluid rounded-circle w-75 p-2 me-5" src="https://i.ibb.co/RgjGQKD/156947934-1388263811511129-447762093556086309-n-1.jpg" alt="" /></div>
        <br />
      </div>
      <div className='col-md-6 name p-5'>
        <h1>Why we are the best?</h1>
        <p className="dialect py-5">The system in which mainly the principles of the Quran, hadith, and fiqh are taught is called madrasah education, in other words, madrasah education means Islamic education. In our country, there are two systems of madrasah education.</p>
      </div>
    </div>
  )
}
export default About;