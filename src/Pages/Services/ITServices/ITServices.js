import React from 'react';
import { Link } from 'react-router-dom';

const ITServices = () => {
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
            <div className="services-section style-9 bg-1 pt-75 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-head text-center pb-55">
                                <h5>// Our IT Services</h5>
                                <h3>We Offer a Wide</h3>
                                <h2>Variety of<span> IT Services</span></h2>
                                <span className="section-head-bar-2"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="service-single-items d-flex">
                                <div className="service-single-icon mr-20">
                                    <i className="flaticon-business-and-finance"></i>
                                </div>
                                <div className="service-content-inner">
                                    <h2>IT Consultancy</h2>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="service-single-items d-flex">
                                <div className="service-single-icon mr-20">
                                    <i className="flaticon-computer"></i>
                                </div>
                                <div className="service-content-inner">
                                    <h2>IT Management</h2>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="service-single-items d-flex">
                                <div className="service-single-icon mr-20">
                                    <i className="flaticon-briefcase"></i>
                                </div>
                                <div className="service-content-inner">
                                    <h2>Product Design</h2>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="service-single-items d-flex">
                                <div className="service-single-icon mr-20">
                                    <i className="flaticon-mail"></i>
                                </div>
                                <div className="service-content-inner">
                                    <h2>Cloud Services</h2>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="service-single-items d-flex">
                                <div className="service-single-icon mr-20">
                                    <i className="flaticon-resume"></i>
                                </div>
                                <div className="service-content-inner">
                                    <h2>Web Development</h2>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="service-single-items d-flex">
                                <div className="service-single-icon mr-20">
                                    <i className="flaticon-system"></i>
                                </div>
                                <div className="service-content-inner">
                                    <h2>Cloud Computing</h2>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-section bg-2 pt-75 pb-80">
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
        </div>
    );
};

export default ITServices;