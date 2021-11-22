import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header className="header-four sticky-header">
      <div className="header-navbar">
        <div className="container position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="navbar-left d-flex align-items-center">
              <div className="site-logo">
                <NavLink to="/">
                  <img className="resize-logo" src="assets/img/logo-4.png" alt="Feedec" />
                </NavLink>
              </div>
              <nav className="site-nav-menu">
                <ul className="primary-menu">
                  <li className="current">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                  <NavLink to="/development">How It Works</NavLink>
                  </li>
       
                  <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                </ul>

                <a  className="nav-close">
                  <i className="fal fa-times"></i>
                </a>
              </nav>
            </div>
            <div className="navbar-right d-flex align-items-center">
              <div className="header-contact-btn">
            
                  <NavLink to="/sign-up">Seller</NavLink>
                  
              </div>
              <a href="#" class="nav-toggler">
                            <i class="far fa-bars"></i>
                        </a>
             
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
