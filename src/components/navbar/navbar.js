import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
  return (    
      <div className="nav-bar">
        <Link to="/" className="navbar-link"><h1>5e Sidekick Creator</h1></Link>
        {/* <div className="link-div">
          <Link to="/selectClassLevel" className="navbar-link">Select Class & Level</Link>
          <Link to="/characterSheet" className="navbar-link">Character Sheet</Link>
        </div> */}
      </div>
  );
}

export default Navbar;