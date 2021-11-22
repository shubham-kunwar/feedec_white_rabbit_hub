import React from "react";
import { NavLink } from "react-router-dom";
//iframe
import Iframe from "react-iframe";


function Contact() {
  return (
    <div>
      <section
        className="breadcrumb-section bgc"
        style={{ backgroundImage: `url(./assets/img/breadcrumb-bg.jpg)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="breadcrumb-text">
                <span className="title-tag">Welcome to our company</span>
                <h2 className="page-title">Contact us.</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="breadcrumb-nav">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="separator">|</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area section-gap-bottom">
        <div className="contact-maps">
          
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d168881.25269211954!2d91.81820959350401!3d24.67371276427247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1613216995304!5m2!1sen!2sbd"
            className="myClassname"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            
          />
          ,
        </div>
        <div className="container">
          <div className="row justify-content-center contact-info-boxes">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="contact-info-box">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: `url(./assets/img/contact-01.jpg)`,
                  }}
                ></div>
                <div className="content">
                  <h4 className="title">Head office in London</h4>
                  <ul>
                    <li>
                      <i className="fal fa-phone"></i>+(123) 456 -7890
                    </li>
                    <li>
                      <i className="fal fa-envelope"></i>
                      <a
                        href="https://demo.webtend.net/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="92fbfcf4fdd2fff3fbfcf7eaf3ffe2fef7bcf1fdff"
                      >
                        [email&#160;protected]
                      </a>
                    </li>
                    <li>
                      <i className="fal fa-map-marker-alt"></i>9/A, North Road,
                      England
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="contact-info-box">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: `url(./assets/img/contact-02.jpg)`,
                  }}
                ></div>
                <div className="content">
                  <h4 className="title">Sub office in Moscow</h4>
                  <ul>
                    <li>
                      <i className="fal fa-phone"></i>+(123) 456 -7890
                    </li>
                    <li>
                      <i className="fal fa-envelope"></i>
                      <a
                        href="https://demo.webtend.net/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="8fe6e1e9e0cfe2eee6e1eaf7eee2ffe3eaa1ece0e2"
                      >
                        [email&#160;protected]
                      </a>
                    </li>
                    <li>
                      <i className="fal fa-map-marker-alt"></i>9/A, North Road,
                      England
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="contact-info-box">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: `url(./assets/img/contact-03.jpg)`,
                  }}
                ></div>
                <div className="content">
                  <h4 className="title">Corporate in New York</h4>
                  <ul>
                    <li>
                      <i className="fal fa-phone"></i>+(123) 456 -7890
                    </li>
                    <li>
                      <i className="fal fa-envelope"></i>
                      <a
                        href="https://demo.webtend.net/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="c4adaaa2ab84a9a5adaaa1bca5a9b4a8a1eaa7aba9"
                      >
                        [email&#160;protected]
                      </a>
                    </li>
                    <li>
                      <i className="fal fa-map-marker-alt"></i>9/A, North Road,
                      England
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="section-title text-center mb-60">
              <span className="title-tag">Call To Action</span>
              <h2 className="title">Make Your Request</h2>
            </div>

            <form action="#">
              <div className="row">
                <div className="col-lg-6 mb-30">
                  <input type="text" placeholder="Full name" />
                </div>
                <div className="col-lg-6 mb-30">
                  <input type="email" placeholder="Enter email" />
                </div>
                <div className="col-12 mb-30">
                  <select>
                    <option value="1">Select Subject</option>
                    <option value="2">Select Subject</option>
                    <option value="3">Select Subject</option>
                  </select>
                </div>
                <div className="col-12 mb-30">
                  <textarea placeholder="Enter message"></textarea>
                </div>
                <div className="col-12 text-center">
                  <button className="main-btn" type="submit">
                    Submit Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
