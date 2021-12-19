import React from 'react';
import { Link } from 'react-router-dom';

const OurService = () => {
    return (
        <>
            <div className="service-section style-fiveteen pt-100 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-head text-center">
                                <h5>// OUR SERVICES</h5>
                                <h3>We Run All Kinds Of Services In Form Of</h3>
                                <h2>Information & <span>Technologies</span></h2>
                                <span className="section-head-bar-2"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-60">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box">
                                <div className="single-service-number">
                                    <span>01</span>
                                </div>
                                <div className="service-content">
                                    <h3>UX/UI Design</h3>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus</p>
                                </div>
                                <div className="service-btns">
                                    <Link to="#">Read More <i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box two">
                                <div className="single-service-number">
                                    <span>02</span>
                                </div>
                                <div className="service-content">
                                    <h3>Web Developments</h3>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus</p>
                                </div>
                                <div className="service-btns">
                                    <Link to="#">Read More <i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box three">
                                <div className="single-service-number">
                                    <span>03</span>
                                </div>
                                <div className="service-content">
                                    <h3>QA & Testing</h3>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus</p>
                                </div>
                                <div className="service-btns">
                                    <Link to="#">Read More <i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box four">
                                <div className="single-service-number">
                                    <span>04</span>
                                </div>
                                <div className="service-content">
                                    <h3>Cloud Services</h3>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus</p>
                                </div>
                                <div className="service-btns">
                                    <Link to="#">Read More <i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box five">
                                <div className="single-service-number">
                                    <span>05</span>
                                </div>
                                <div className="service-content">
                                    <h3>IT Management</h3>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus</p>
                                </div>
                                <div className="service-btns">
                                    <Link to="#">Read More <i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box six">
                                <div className="single-service-number">
                                    <span>06</span>
                                </div>
                                <div className="service-content">
                                    <h3>IT Consultancy</h3>
                                    <p>Nullam tincidunt augue eget densis volu tpat, vitae ultri ces lectus and posuere. Duis urna lacus</p>
                                </div>
                                <div className="service-btns">
                                    <Link to="#">Read More <i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-btn-two text-center">
                        <Link to="#">See More Services</Link>
                    </div>
                </div>
                <div className="shape10">
                    <img src="assets/images/shape/shape2.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default OurService;