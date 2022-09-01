import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
  return (    
      <div className="nav-bar">
        <h1>5e Sidekick Creator</h1>
        <div className="link-div">
          <Link to="/" className="navbar-link">Select Creature</Link>
          <Link to="/selectClassLevel" className="navbar-link">Select Class & Level</Link>
          <Link to="/characterSheet" className="navbar-link">Character Sheet</Link>
        </div>
      </div>
  );
}

export default Navbar;