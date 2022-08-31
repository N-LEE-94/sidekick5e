import React from "react";
// import './navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
  return (    
      <div className="nav-bar">
        <div className="name-div">
        <h1>5e Sidekick Creator</h1>
        </div>
        <div className="link-div">
          <Link to="/" className="navbar-link" key="home">Select Creature</Link>
          <Link to="/selectClassLevel" className="navbar-link" key="classLevel">Select Class & Level</Link>
          <Link to="/characterSheet" className="navbar-link" key="charSheet">Character Sheet</Link>
        </div>
      </div>
  );
}

export default Navbar;