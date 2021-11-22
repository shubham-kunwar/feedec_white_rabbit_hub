import React from "react";
import { NavLink } from "react-router-dom";
function Development() {
  return (
    <div>
    
    <section className="breadcrumb-section bgc" style={{ backgroundImage: `url(./assets/img/breadcrumb-bg.jpg)` }}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                    <div className="breadcrumb-text">
                        <span className="title-tag">For the delays we are</span>
                        <h2 className="page-title">Really Sorry!</h2>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className="breadcrumb-nav">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li className="separator">|</li>
                            <li>Oops</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="about-section section-gap">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-6 col-lg-9">
                    <div className="about-experience-galley mb-lg-gap-50">
                        <div className="image-one"     style={{ backgroundImage: `url(./assets/img/experience-gallery/04.jpg)` }}>
                        </div>
                        <div className="image-two" style={{ backgroundImage: `url(./assets/img/experience-gallery/05.jpg)`}} >
                        </div>
                        <div className="image-three" style={{ backgroundImage: `url(./assets/img/experience-gallery/06.jpg)` }}>
                        </div>
                        <div className="experience-tag">
                            <span><span className="count">30</span>Years Experience</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="about-text">
                        <div className="section-title mb-30">
                            <h2 className="title">
                                This Page is still in development phase.
                            </h2>
                        </div>
                        <p>
                            Productservices are professional services that help market or advertise your business
                            online. Best Way to Manage and Share Work Resources.
                        </p>
                        <a href="#" className="main-btn mt-30">Learn More</a>
                        <div className="about-author">
                            <div className="author-img">
                                <img src="assets/img/about-author.jpg" alt="Image"/>
                            </div>
                            <div className="author-desc">
                                <h5>Rosalina D. William</h5>
                                <span>Founder of Bella</span>
                            </div>
                            <div className="brand-img">
                                <img src="assets/img/brand/2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
  );
}

export default Development;