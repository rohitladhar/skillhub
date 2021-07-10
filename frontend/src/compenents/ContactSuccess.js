import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";

function ContactSuccess() {
    
  return (
    <div>
      <div className="header">
          <Link to="/">
            <img className="header__logo" src='logo.png' alt="SkillHub" />
          </Link>
      </div>   
      <h1>We Received your message.</h1> 
    </div>
  );
}

export default ContactSuccess;
