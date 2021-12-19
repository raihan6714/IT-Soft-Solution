import React from 'react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
    return (
        <div>
            <div className="breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="breadcumb-content">
                            <h1>IT Services</h1>
                            <ul>
                                <li><Link to="/hme">Home</Link></li>
                                <li><i className="fa fa-angle-right"></i></li>
                                <li>IT Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="web-dev-section pt-80 pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="web-dev-thumb-section">
                                <img src="assets/images/about/ab4.png" alt="about-img" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="web-dev-content-container pl-30">
                                <div className="section-head-container">
                                    <div className="section-head style-4">
                                        <h5>// Web Development</h5>
                                        <h3>We Provide Best</h3>
                                        <h2>Web <span>Development Services</span></h2>
                                        <span className="section-head-bar"></span>
                                    </div>
                                </div>
                                <div className="web-dev-content mt-60">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="web-dev-single-content">
                                                <div className="content-position">01.</div>
                                                <div className="content-title">Java Development</div>
                                                <div className="content-text"><p>We’re committed to building sustainable and high-quality Java solutions</p></div>
                                            </div>
                                            <div className="web-dev-single-content">
                                                <div className="content-position">02.</div>
                                                <div className="content-title">PHP Development</div>
                                                <div className="content-text"><p>We’re committed to building sustainable and high-quality Java solutions</p></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="web-dev-single-content">
                                                <div className="content-position">03.</div>
                                                <div className="content-title">C++ Development</div>
                                                <div className="content-text"><p>We’re committed to building sustainable and high-quality Java solutions</p></div>
                                            </div>
                                            <div className="web-dev-single-content">
                                                <div className="content-position">04.</div>
                                                <div className="content-title">.NET Development</div>
                                                <div className="content-text"><p>We’re committed to building sustainable and high-quality Java solutions</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-content-section pb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="single-content d-flex">
                                <div className="content-icon">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="content-text">
                                    <h4>Machine Learning</h4>
                                    <p>Support and Evolution</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="single-content d-flex">
                                <div className="content-icon">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="content-text">
                                    <h4>Artificial Intelligence</h4>
                                    <p>Support and Evolution</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="single-content d-flex">
                                <div className="content-icon">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="content-text">
                                    <h4>Augmented Reality</h4>
                                    <p>Support and Evolution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-section style-3 bg-2 pt-75 pb-75">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="about-thumb-section">
                                <div className="about-single-thumb">
                                    <img src="assets/images/about/ab2.jpg" alt="about-img" />
                                </div>
                                <div className=" common-video about-video">
                                    <div className="video-icon">
                                        <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://youtu.be/BS4TUd7FJSg"><i className="fas fa-play-circle"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="about-content-container pl-30">
                                <div className="section-head">
                                    <h5>// Technology Index</h5>
                                    <h3>We Organize Our</h3>
                                    <h2>Production <span>Process</span></h2>
                                    <span className="section-head-bar"></span>
                                    <p> ITSoft is the partner of choice for many of the world’s leading and enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development.</p>
                                </div>
                                <div id="tabs">
                                    <div className="tabs-btn">
                                        <ul className="tabs-btn-list">
                                            <li><a href="#analysis">Analysis</a></li>
                                            <li><a href="#design">Design</a></li>
                                            <li><a href="#testing">Testing</a></li>
                                        </ul>
                                    </div>
                                    <div id="analysis">
                                        <div className="tabs-content-area">
                                            <p>Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ulac laboris aliquip ex ea commodo consequat duis aute irure.dolor in repre henderit in voluptate velit esse cillum dolore.</p>
                                        </div>
                                    </div>
                                    <div id="design">
                                        <div className="tabs-content-area">
                                            <p>Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ulac laboris aliquip ex ea commodo.</p>
                                        </div>
                                    </div>
                                    <div id="testing">
                                        <div className="tabs-content-area">
                                            <p>Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-section pt-75 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-head text-center pb-55">
                                <h5>// Our Pricing</h5>
                                <h3 className="">Choose Your Best </h3>
                                <h2><span>Pricing Plans</span></h2>
                                <span className="section-head-bar-2"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6 col-lg-4 pl-0 pr-0">
                            <div className="pricing-single-items">
                                <div className="pricing-thumb pt-25">
                                    <img src="assets/images/pricing/pricing-i1.png" alt="Pricing Img" />
                                </div>
                                <div className="pricing-title">
                                    <h3>Business</h3>
                                </div>
                                <div className="pricing-item-text mb-15">
                                    <span className="currency">$</span>
                                    <span className="tk">199</span>
                                    <span className="month"> / mo </span>
                                </div>
                                <div className="pricing-body">
                                    <div className="pricing-feature mb-40">
                                        <ul>
                                            <li><b>Basic Informations</b></li>
                                            <li>30 days trial Features </li>
                                            <li>Synced to cloud database </li>
                                            <li>10 hours of support </li>
                                            <li>Social media integration </li>
                                            <li>Unlimited Features</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricing-btn">
                                    <div className="btn-common pc-btn mb-60">
                                        <Link to="#">Select Plan</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 pl-0 pr-0">
                            <div className="pricing-single-items style-2">
                                <div className="pricing-thumb pt-25">
                                    <img src="assets/images/pricing/pricing-i2.png" alt="Pricing Img" />
                                </div>
                                <div className="pricing-title">
                                    <h3>Economy</h3>
                                </div>
                                <div className="pricing-item-text mb-15">
                                    <span className="currency">$</span>
                                    <span className="tk">99</span>
                                    <span className="month"> / mo </span>
                                </div>
                                <div className="pricing-body">
                                    <div className="pricing-feature mb-40">
                                        <ul>
                                            <li><b>Basic Informations</b></li>
                                            <li>30 days trial Features </li>
                                            <li>Synced to cloud database </li>
                                            <li>10 hours of support </li>
                                            <li>Social media integration </li>
                                            <li>Unlimited Features</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricing-btn">
                                    <div className="btn-common pc-btn mb-60">
                                        <Link to="#">Select Plan</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 pl-0 pr-0">
                            <div className="pricing-single-items">
                                <div className="pricing-thumb pt-25">
                                    <img src="assets/images/pricing/pricing-i1.png" alt="Pricing Img" />
                                </div>
                                <div className="pricing-title">
                                    <h3>Premium</h3>
                                </div>
                                <div className="pricing-item-text mb-15">
                                    <span className="currency">$</span>
                                    <span className="tk">149</span>
                                    <span className="month"> / mo </span>
                                </div>
                                <div className="pricing-body">
                                    <div className="pricing-feature mb-40">
                                        <ul>
                                            <li><b>Basic Informations</b></li>
                                            <li>30 days trial Features </li>
                                            <li>Synced to cloud database </li>
                                            <li>10 hours of support </li>
                                            <li>Social media integration </li>
                                            <li>Unlimited Features</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricing-btn">
                                    <div className="btn-common pc-btn mb-60">
                                        <Link to="#">Select Plan</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="call-do-action-section pt-90 pb-220">
                <div className="container">
                    <div className="call-do-action-video text-center mb-35">
                        <div className="video-icon video-icon-cda">
                            <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://youtu.be/BS4TUd7FJSg"><i className="fas fa-pause-circle"></i></a>
                        </div>
                    </div>
                    <div className="call-do-action-content text-center">
                        <h2 className="text-white">We Deliver Solution With The Goal Of <br /><span className="sub-title"> A Trusting Relationships</span></h2>
                        <p className="text-white">Appropriate for your specific business, making it easy for you to have quality IT services.</p>
                        <div className="btn-common btn-cda mt-40">
                            <Link to="#">Watch More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-section">
                <div className="container">
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-single-item">
                            <div className="testimonial-thumb">
                                <img src="assets/images/testimonial/tstm1.jpg" alt="testimonial Img" />
                                <div className="testimonial-icon">
                                    <span><i className="fas fa-quote-left"></i></span>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-content-text">Sorem ipsum dolor sit amet there any consectetur adipisicing eliter sed do the eiusmod tempor asem incididunt ut labore dolore magna aliqua. Ut enim adern minim.</p>
                                <h4>John Abraham</h4>
                                <p className="testimonial-designation">Web developer</p>
                            </div>
                        </div>
                        <div className="testimonial-single-item">
                            <div className="testimonial-thumb">
                                <img src="assets/images/testimonial/tstm2.jpg" alt="testimonial Img" />
                                <div className="testimonial-icon">
                                    <span><i className="fas fa-quote-left"></i></span>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-content-text">Sorem ipsum dolor sit amet there any consectetur adipisicing eliter sed do the eiusmod tempor asem incididunt ut labore dolore magna aliqua. Ut enim adern minim.</p>
                                <h4>Ellen Erye </h4>
                                <p className="testimonial-designation">Project Manager</p>
                            </div>
                        </div>
                        <div className="testimonial-single-item">
                            <div className="testimonial-thumb">
                                <img src="assets/images/testimonial/tstm3.jpg" alt="testimonial Img" />
                                <div className="testimonial-icon">
                                    <span><i className="fas fa-quote-left"></i></span>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-content-text">Sorem ipsum dolor sit amet there any consectetur adipisicing eliter sed do the eiusmod tempor asem incididunt ut labore dolore magna aliqua. Ut enim adern minim.</p>
                                <h4>Shene Watsan </h4>
                                <p className="testimonial-designation">Founder</p>
                            </div>
                        </div>
                        <div className="testimonial-single-item">
                            <div className="testimonial-thumb">
                                <img src="assets/images/testimonial/tstm2.jpg" alt="testimonial Img" />
                                <div className="testimonial-icon">
                                    <span><i className="fas fa-quote-left"></i></span>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-content-text">Sorem ipsum dolor sit amet there any consectetur adipisicing eliter sed do the eiusmod tempor asem incididunt ut labore dolore magna aliqua. Ut enim adern minim.</p>
                                <h4>Monalysha</h4>
                                <p className="testimonial-designation">CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brand-section pb-45">
                <div className="container">
                    <div className="row">
                        <div className="brand-carousel owl-carousel">
                            <div className="single-brand">
                                <img src="assets/images/brand/brand-1.png" alt="Brand" />
                            </div>
                            <div className="single-brand">
                                <img src="assets/images/brand/brand-2.png" alt="Brand" />
                            </div>
                            <div className="single-brand">
                                <img src="assets/images/brand/brand-3.png" alt="Brand" />
                            </div>
                            <div className="single-brand">
                                <img src="assets/images/brand/brand-4.png" alt="Brand" />
                            </div>
                            <div className="single-brand">
                                <img src="assets/images/brand/brand-5.png" alt="Brand" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subscribe-section">
                <div className="container">
                    <div className="row footer-hr">
                        <div className="col-md-6">
                            <div className="subscribe-section-content d-flex">
                                <div className="subscribe-section-icon">
                                    <i className="flaticon-time"></i>
                                </div>
                                <div className="subscribe-section-title">
                                    <h5>Sign up to get latest updates</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="subscribe-input-field">
                                <form action="https://html.dreamitsolution.net/itsoft/POST">
                                    <div className="subscribe-mail-box">
                                        <input className="subscribe-mail-box" type="email" name="email" placeholder="Enter Your Email...." required />
                                        <button className="subscribe-submit-btn" type="submit" name="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDevelopment;