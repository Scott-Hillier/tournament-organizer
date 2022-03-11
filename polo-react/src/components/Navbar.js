import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <i class="fa fa-bars" aria-hidden="true" onClick={showSidebar}></i>
        </Link>
        <div className="nav-icon">HOME</div>
        <div className="nav-account">ACCOUNT</div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <i class="fa fa-times" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-text a">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/tournaments" className="nav-text">
              <span>Tournaments</span>
            </Link>
          </li>
          <li>
            <Link to="/organize" className="nav-text">
              <span>Organize</span>
            </Link>
          </li>
          <li>
            <Link to="/teams" className="nav-text">
              <span>Teams</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
