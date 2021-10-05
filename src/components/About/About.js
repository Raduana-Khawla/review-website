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
        <h1>why we are the best </h1>
        <p className="dialect py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reprehenderit quasi neque nisi adipisci delectus provident harum iure.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero cum temporibus omnis recusandae reprehenderit tempora blanditiis labore iusto quis, quam illum quibusdam minima debitis, sit dolorem a maxime. Amet, sed. </p>
      </div>
    </div>
  )
}
export default About;