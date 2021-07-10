import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";

function Error() {
    
  return (
    <div>
      <div className="header">
          <Link to="/">
            <img className="header__logo" src='logo.png' alt="SkillHub" />
          </Link>
      </div>   
      <h1>404 Not Found</h1> 
    </div>
  );
}

export default Error;
