import React from 'react';

const About = () => {
    return (
        <>
            <div className="about-section pt-80 pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="about-thumb-section">
                                <div className="about-single-thumb">
                                    <img src="assets/images/about/ab1.jpg" alt="about-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="about-content-container pl-30">
                                <div className="section-head-container">
                                    <div className="section-head">
                                        <h5>// About Company</h5>
                                        <h3>We Deal With The Aspects of</h3>
                                        <h2>Professional <span>IT Services</span></h2>
                                        <span className="section-head-bar"></span>
                                        <p> ITSoft is the partner of choice for many of the world’s leading and enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development.</p>
                                    </div>
                                </div>
                                <div className="about-content">
                                    <div className="single-content  pb-25 pt-25 d-flex">
                                        <div className="content-single-icon">
                                            <i className="flaticon-next-1"></i>
                                        </div>
                                        <div className="single-content-inner">
                                            <h5 className="inner-content-title pb-15">User Experience</h5>
                                            <p>Skilled professionals are always ready to provide reliable services to our clients!</p>
                                        </div>
                                    </div>
                                    <div className="single-content d-flex">
                                        <div className="content-single-icon">
                                            <i className="flaticon-next"></i>
                                        </div>
                                        <div className="single-content-inner">
                                            <h5 className="inner-content-title pb-15">Quick Support</h5>
                                            <p>Branches are situated in major metro cities and overseas, always open for you!</p>
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

export default About;