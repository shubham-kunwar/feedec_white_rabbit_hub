import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
    

    

    <section className="breadcrumb-section bgc" style={{ backgroundImage: `url(./assets/img/breadcrumb-bg.jpg)` }}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                    <div className="breadcrumb-text">
                        <span className="title-tag">Welcome to our company</span>
                        <h2 className="page-title">About Us.</h2>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className="breadcrumb-nav">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li className="separator">|</li>
                            <li>About</li>
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
                        <div className="image-one"     style={{ backgroundImage: `url(./assets/img/experience-gallery/01.jpg)` }}>
                        </div>
                        <div className="image-two" style={{ backgroundImage: `url(./assets/img/experience-gallery/02.jpg)`}} >
                        </div>
                        <div className="image-three" style={{ backgroundImage: `url(./assets/img/experience-gallery/03.jpg)` }}>
                        </div>
                        <div className="experience-tag">
                            <span><span className="count">30</span>Years Experience</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="about-text">
                        <div className="section-title mb-30">
                            <span className="title-tag">About Us</span>
                            <h2 className="title">
                                Get an amazing experience with quality level team
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

    <section className="service-area section-gap grey-bg">
        <div className="container">
            <div className="section-title text-center mb-30">
                <span className="title-tag">Services</span>
                <h2 className="title">Solutions we provide</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="service-box-two mt-30">
                        <span className="box-count">01</span>
                        <h4 className="title"><a href="#">Digital Product Developoment</a></h4>
                        <p>
                            We enjoy working with discerning clients, people for whom quality, service, integrity &
                            aesthetics matter deeply.
                        </p>
                        <a href="#" className="service-link">
                            <i className="fal fa-plus"></i>
                            <span>Read More</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="service-box-two mt-30">
                        <span className="box-count">02</span>
                        <h4 className="title"><a href="#">General Consulting Process</a></h4>
                        <p>
                            We enjoy working with discerning clients, people for whom quality, service, integrity &
                            aesthetics matter deeply.
                        </p>
                        <a href="#" className="service-link">
                            <i className="fal fa-plus"></i>
                            <span>Read More</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="service-box-two mt-30">
                        <span className="box-count">03</span>
                        <h4 className="title"><a href="#">Hire in Fixed Contracting</a></h4>
                        <p>
                            We enjoy working with discerning clients, people for whom quality, service, integrity &
                            aesthetics matter deeply.
                        </p>
                        <a href="#" className="service-link">
                            <i className="fal fa-plus"></i>
                            <span>Read More</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="skill-section section-gap">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-7 col-md-10 order-lg-2">
                    <div className="skillset-video active ms-lg-5">
                        <a href="https://www.youtube.com/watch?v=pVE92TNDwUk" className="popup-btn popup-video"><i className="fas fa-play"></i></a>
                        <div className="video-bg" style={{ backgroundImage: `url(./assets/img/experience-gallery/04.jpg)` }}></div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-10 order-lg-1">
                    <div className="skill-text mt-md-gap-50">
                        <div className="section-title mb-30">
                            <span className="title-tag">Our Skillset</span>
                            <h2 className="title">Emerging technologies converge with urban</h2>
                        </div>
                        <p>
                            Their creativity, innovation, technological expertise, and project completion steps were impressive. Project management was professional. We’re a full-service creative digital marketing agency, collaborating.
                        </p>
                        <div className="progress-bars progress-bars-two mt-40">
                            <div className="single-progress" data-count="72">
                                <div className="title">
                                    <span>Main Strategy</span>
                                    <span className="progress-counter"><span className="count">72</span>%</span>
                                </div>
                                <div className="progressbar-wrap">
                                    <div className="progressbar"></div>
                                </div>
                            </div>
                            <div className="single-progress" data-count="80">
                                <div className="title">
                                    <span>Gaming & Planning</span>
                                    <span className="progress-counter"><span className="count">80</span>%</span>
                                </div>
                                <div className="progressbar-wrap">
                                    <div className="progressbar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="news-section section-gap grey-bg">
        <div className="container">
            <div className="section-title text-center mb-30">
                <span className="title-tag">News</span>
                <h2 className="title">New and latest insights</h2>
            </div>
            <div className="row latest-news-boxes boxes-primary-color">
                <div className="col-xl-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="latest-news-box mt-30">
                           
                                <div className="news-thumb"  style={{ backgroundImage: `url(./assets/img/latest-news/01.jpg)` }}></div>
                                <div className="content">
                                    <ul className="post-meta">
                                        <li><a href="#"><i className="fal fa-calendar-alt"></i> 10th May 2020</a></li>
                                        <li className="admin"><a href="#">Admin</a></li>
                                    </ul>
                                    <h4>
                                        <a href="#">Chemical engineering projects for all technologies</a>
                                    </h4>
                                    <p>
                                        As emerging technologies converge with urban planning, a revolution of automated, on-demand and ownerless transport beckons. But is the concept
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="latest-news-box mt-30">
                                <div className="news-thumb"  style={{ backgroundImage: `url(./assets/img/latest-news/02.jpg)` }}></div>
                                <div className="content">
                                    <ul className="post-meta">
                                        <li><a href="#"><i className="fal fa-calendar-alt"></i> 10th May 2020</a></li>
                                        <li className="admin"><a href="#">Admin</a></li>
                                    </ul>
                                    <h4>
                                        <a href="#">Chemical engineering projects for all technologies</a>
                                    </h4>
                                    <p>
                                        As emerging technologies converge with urban planning, a revolution of automated, on-demand and ownerless transport beckons. But is the concept
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="latest-news-side mt-30">
                        <div className="single-side-box">
                            <div className="news-thumb"  style={{ backgroundImage: `url(./assets/img/latest-news/03.jpg)` }}></div>
                            <div className="content">
                                <ul className="post-meta">
                                    <li><a href="#"><i className="fal fa-calendar-alt"></i> 10th May 2020</a></li>
                                    <li className="admin"><a href="#">Admin</a></li>
                                </ul>
                                <h4>
                                    <a href="#">Engineering projects for all technologies</a>
                                </h4>
                            </div>
                        </div>
                        <div className="single-side-box">
                            <div className="news-thumb" style={{ backgroundImage: `url(./assets/img/latest-news/04.jpg)` }}></div>
                            <div className="content">
                                <ul className="post-meta">
                                    <li><a href="#"><i className="fal fa-calendar-alt"></i> 10th May 2020</a></li>
                                    <li className="admin"><a href="#">Admin</a></li>
                                </ul>
                                <h4>
                                    <a href="#">Engineering projects for all technologies</a>
                                </h4>
                            </div>
                        </div>
                        <div className="single-side-box">
                            <div className="news-thumb" style={{ backgroundImage: `url(./assets/img/latest-news/01.jpg)` }}></div>
                            <div className="content">
                                <ul className="post-meta">
                                    <li><a href="#"><i className="fal fa-calendar-alt"></i> 10th May 2020</a></li>
                                    <li className="admin"><a href="#">Admin</a></li>
                                </ul>
                                <h4>
                                    <a href="#">Engineering projects for all technologies</a>
                                </h4>
                            </div>
                        </div>
                        <a href="#" className="load-more-btn"><i className="fal fa-newspaper"></i> More News</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default About;