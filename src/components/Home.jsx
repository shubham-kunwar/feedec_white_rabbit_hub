import React from "react";
import { NavLink } from "react-router-dom";
import MainVideo from "./section/MainVideo";
import VideoClip from "./section/VideoClip";

function Home() {
  return (
    <div >
      <section className="hero-area">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <div className="hero-text">
                <span
                  className="title-tag wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  It's a lot easy to make a difference togather.
                </span>
                <h2 className="title wow fadeInLeft" data-wow-delay="0.1s">
                  Replication is the <br /> presentation of <br /> our{" "}
                  <span>capabilities</span>
                </h2>
                <ul className="hero-btns center">
                  <li className="wow fadeInUp" data-wow-delay="0.1s">
                    <div className="header-contact-btn">
                      <NavLink className="main-btn" to="/sign-up">
                        Become A Seller
                      </NavLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div
                className="hero-img text-lg-end text-center wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <img src="assets/img/hero-img/hero-01.png" alt="HeroImage" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-section">
        <div className="container">
          <div className="counter-inner">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="counter-wrap">
                    <i className="fal fa-user"></i>{" "}
                    <span className="counter">26984</span>
                  </div>
                  <h3 className="title">Happy Customers</h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="counter-wrap">
                    <i className="fal fa-globe"></i>{" "}
                    <span className="counter">219</span>
                  </div>
                  <h3 className="title">Global Presence</h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="counter-wrap">
                    <i className="fal fa-users"></i>{" "}
                    <span className="counter">3</span>k+
                  </div>
                  <h3 className="title">Active Sellers</h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="counter-wrap">
                    <i className="fal fa-book"></i>{" "}
                    <span className="counter">500</span>+
                  </div>
                  <h3 className="title">Recognition</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-area section-gap primary-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="section-title text-center mb-30">
                <h2 className="title">
                  Benefits of being a seller at <span>FEEDEC</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-md-6 col-sm-10 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div className="service-box mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="assets/img/service/01.png" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>Digital Product</h4>
                      <p>
                        Productservices are professional services that help
                        market or advertise your business online.
                      </p>
                      <a href="service-2.html" className="service-link">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-10 wow fadeInRight"
              data-wow-delay="0.4s"
            >
              <div className="service-box mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="assets/img/service/02.png" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>Game Development</h4>
                      <p>
                        Productservices are professional services that help
                        market or advertise your business online.
                      </p>
                      <a href="service.html" className="service-link">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-10 wow fadeInLeft"
              data-wow-delay="0.5s"
            >
              <div className="service-box pro-service mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="assets/img/service/03.png" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>
                        <span>Pro</span>Consultancy
                      </h4>
                      <p>
                        Productservices are professional services that help
                        market or advertise your business online.
                      </p>
                      <a href="service-2.html" className="service-link">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-10 wow fadeInRight"
              data-wow-delay="0.6s"
            >
              <div className="service-box mt-30">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="service-img">
                      <img src="assets/img/service/04.png" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="service-desc">
                      <h4>Digital Marketing</h4>
                      <p>
                        Productservices are professional services that help
                        market or advertise your business online.
                      </p>
                      <a href="service-2.html" className="service-link">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section with-pattern testimonial-brand-section primary-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50">
                <h2 className="title">
                  Clients <span>Feedbacks</span>
                </h2>
              </div>
              <div className="testimonial-slider-progress mb-40">
                <span className="line-one"></span>
                <span className="line-two"></span>
              </div>
            </div>
          </div>
          <div className="testimonial-boxes row" id="testimonialSliderOne">
            <div className="col">
              <div className="testimonial-box">
                <div className="author-img">
                  <img
                    src="assets/img/testimonial/testimonial-author-1.png"
                    alt="Testimonial"
                  />
                </div>
                <div className="content">
                  <p>
                    ”Hundreds Of Successful Organizations Companies of every
                    size, and in 62 different countries, are using Betakit.”
                  </p>
                  <div className="author-info">
                    <h5>Miranda H. Halim</h5>
                    <span>Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-box">
                <div className="author-img">
                  <img
                    src="assets/img/testimonial/testimonial-author-2.png"
                    alt="Testimonial"
                  />
                </div>
                <div className="content">
                  <p>
                    ”Hundreds Of Successful Organizations Companies of every
                    size, and in 62 different countries, are using Betakit.”
                  </p>
                  <div className="author-info">
                    <h5>Miranda H. Halim</h5>
                    <span>Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-box">
                <div className="author-img">
                  <img
                    src="assets/img/testimonial/testimonial-author-1.png"
                    alt="Testimonial"
                  />
                </div>
                <div className="content">
                  <p>
                    ”Hundreds Of Successful Organizations Companies of every
                    size, and in 62 different countries, are using Betakit.”
                  </p>
                  <div className="author-info">
                    <h5>Miranda H. Halim</h5>
                    <span>Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-box">
                <div className="author-img">
                  <img
                    src="assets/img/testimonial/testimonial-author-2.png"
                    alt="Testimonial"
                  />
                </div>
                <div className="content">
                  <p>
                    ”Hundreds Of Successful Organizations Companies of every
                    size, and in 62 different countries, are using Betakit.”
                  </p>
                  <div className="author-info">
                    <h5>Miranda H. Halim</h5>
                    <span>Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skill-section section-gap-top">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-lg-6 col-md-10">
              <div className="skill-text mb-50">
                <div className="section-title mb-30">
                  <span className="title-tag">Our Skillset</span>
                  <h2 className="title">
                    Effective business delivery solutions at all{" "}
                    <span>glance</span>
                  </h2>
                </div>
                <p>
                  Productservices are professional services that help market or
                  advertise your business <br /> online. Best Way to Manage and
                  Share Work Resources.
                </p>
              </div>
            </div>
          </div>
        </div>
        <MainVideo />
      </section>

     <VideoClip/>
    </div>
  );
}

export default Home;
