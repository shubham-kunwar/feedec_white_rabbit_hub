import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";

function Signin() {
  
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
        <div className="appAsideSignin" />

        <div className="appForm">
          <div className="pageSwitcher">
            <NavLink
              to="/sign-up"
              className="pageSwitcherItem pageSwitcherItem-active"
            >
              Or Sign Up 
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
          <form className="formFields" >
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
              <button className="formFieldButton">Sign In</button>{" "}
              <Link to="/sign-up" className="formFieldLink">
                Create an account
              </Link>
            </div>

            <div className="socialMediaButtons">
              <div className="facebookButton">
                <FacebookLoginButton onClick={() => alert("Hello")} />
              </div>

              <div className="instagramButton">
                <InstagramLoginButton onClick={() => alert("Hello")} />
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;