import React from 'react';
import './About.css';

const About = props => {
  return (
    <div id="About" className="row">
      <div className="col-md-12">
        <div className="container heading-about1">
          <div className="heading-hr">
            <h1>About Us</h1>
            <p>With 20+ years of experience and specializing in refrigeration.</p>
          </div>          
          <span>
          <i className="fas fa-dollar-sign "></i>
            <p>
            The customer will be informed of any repair costs (stacked units, sealed system repairs, tub repairs, etc.) at the time of the assessment. The cost of parts is also included in the estimate. We feel customers should have the estimate of repairs available to them prior to the repair so they are as fully aware of costs as possible prior to beginning repairs.
            </p>
          </span>
          
            <br />
          <p>
          Most people in our industry who come to your home to repair your appliance are being pushed by their supervisors to sell you additional items or service contracts. Our business is appliance repair, if you need a part, the technician will explain why that part is needed. Our technicians do not sell service contracts. We are not salesmen.
          </p>
            <br/>
          <p>
            Customer satisfaction is our number one goal.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <h1>Right Side</h1>
      </div>
      <div className="col-md-12">
      
      </div>
    </div>
  );
}

export default About;
