import React from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  
  return (
    <div>
      <section
        className="breadcrumb-section bgc"
        style={{ backgroundImage: `url(./assets/img/breadcrumb-bg.jpg)` }}
      >
        <div className="container">
          <div className="row align-items-center">
           
          
          </div>
        </div>
      </section>
      <div className="App">
        <div className="appAsideSignup"   />

        <div className="appForm">
          <div className="pageSwitcher">
            <NavLink
              to="/sign-in"
              className="pageSwitcherItem pageSwitcherItem-active"
            >
              Or Sign In 
            </NavLink>
           
          </div>

          <div className="formTitle">
            
            <NavLink
              exact
              to="/sign-up"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
             Join Us Now
            </NavLink>
          </div>
          <div className="formCenter">
            <form  className="formFields">
              <div className="formField">
                <label className="formFieldLabel" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="formFieldInput"
                  placeholder="Enter your full name"
                  name="name"
                  
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="formFieldInput"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>

              <div className="formField">
                <label className="formFieldCheckboxLabel">
                  <input
                    className="formFieldCheckbox"
                    type="checkbox"
                    name="hasAgreed"
                  />{" "}
                  I agree all statements in{" "}
                  <a href="null" className="formFieldTermsLink">
                    terms of service
                  </a>
                </label>
              </div>

              <div className="formField">
                <button className="formFieldButton">Sign Up</button>{" "}
                <NavLink to="/sign-in" className="formFieldLink">
                  I'm already member
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
