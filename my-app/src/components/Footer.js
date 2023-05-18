import React from "react";
import email from "../images/email.png"; 
import facebook from "../images/facebook.png"; 
import linkedin from "../images/linkedin.png"; 


const Footer = () => {
  return (
    <div className="footer">
      <img src={email} alt="Logo 1" />
      <img src={facebook} alt="Logo 2" />
      <img src={linkedin} alt="Logo 3" />
    </div>
  );
};

export default Footer;
