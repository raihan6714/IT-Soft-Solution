import React from 'react';
import { Link } from 'react-router-dom';

const OurProjects = () => {
    return (
        <>
            <div className="section-head style-10  pt-75 pb-220 mb-15">
                <div className="container">
                    <div className="row">
                        <div className=" col-sm-12 col-md-12 col-lg-5">
                            <div className="section-title">
                                <h5 className="text-white">// Our Case Study</h5>
                                <h3 className="text-white">Introduce Our Projects</h3>
                            </div>
                        </div>
                        <div className=" col-sm-12 col-md-12 col-lg-7 p-0">
                            <div className="section-head-content">
                                <p className="pt-0 pb-0 text-white">Software development outsourcing is just a tool to achieve business goals. But and there is no way to get worthwhile results without cooperation and trust between a client company and your portfolio..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="case-study-section upper10">
                <div className="container-fluid">
                    <div className="row">
                        <div className="case-study_carousel owl-carousel">
                            <div className="col-md-12">
                                <div className="case-study-single-item">
                                    <div className="case-study-thumb">
                                        <img src="assets/images/case-study/pd1.jpg" alt="" />
                                        <div className="case-study-content">
                                            <h2><a href="case-study-details.html">Product Design</a></h2>
                                            <span className="catagory-item"> Branding</span>
                                            <span className="catagory-item"> Development</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="case-study-single-item">
                                    <div className="case-study-thumb">
                                        <img src="assets/images/case-study/pd2.jpg" alt="" />
                                        <div className="case-study-content">
                                            <h2><a href="case-study-details.html">Research Now</a></h2>
                                            <span className="catagory-item"> Branding</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="case-study-single-item">
                                    <div className="case-study-thumb">
                                        <img src="assets/images/case-study/pd3.jpg" alt="" />
                                        <div className="case-study-content">
                                            <h2><a href="case-study-details.html">Tech Conference</a></h2>
                                            <span className="catagory-item"> Development</span>
                                            <span className="catagory-item"> Branding</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="case-study-single-item">
                                    <div className="case-study-thumb">
                                        <img src="assets/images/case-study/pd4.jpg" alt="" />
                                        <div className="case-study-content">
                                            <h2><a href="case-study-details.html">Growth Strategies</a></h2>
                                            <span className="catagory-item"> Development</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="case-study-single-item">
                                    <div className="case-study-thumb">
                                        <img src="assets/images/case-study/pd5.jpg" alt="" />
                                        <div className="case-study-content">
                                            <h2><a href="case-study-details.html">Innovative Interfaces</a></h2>
                                            <span className="catagory-item"> Development</span>
                                            <span className="catagory-item"> Branding</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="case-study-single-item">
                                    <div className="case-study-thumb">
                                        <img src="assets/images/case-study/pd6.jpg" alt="" />
                                        <div className="case-study-content">
                                            <h2><a href="case-study-details.html">Creative Mind</a></h2>
                                            <span className="catagory-item"> Branding</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurProjects;