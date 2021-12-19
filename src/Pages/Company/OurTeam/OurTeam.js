import React from 'react';
import { Link } from 'react-router-dom';

const OurTeam = () => {
    return (
        <div>
            <div className="breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="breadcumb-content">
                            <h1>Our Team Member</h1>
                            <ul>
                                <li><Link to="/hme">Home</Link></li>
                                <li><i className="fa fa-angle-right"></i></li>
                                <li>Our Team Member</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-section style-5 pt-75 pb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="about-content-container">
                                <div className="section-head-container">
                                    <div className="section-head">
                                        <h5>// About Our Expert</h5>
                                        <h3>Entrust Your Project to </h3>
                                        <h2>Our<span>  Specialists</span></h2>
                                        <span className="section-head-bar"></span>
                                        <div className="block-text">
                                            <p>Our IT services converge business and technology experts to help to manage business categories.</p>
                                        </div>
                                        <p> ITSoft is the partner of choice for many of the world’s leading solution and enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development.</p>
                                    </div>
                                </div>
                                <div className="common-video style-5 mb-35">
                                    <div className="video-icon">
                                        <Link className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" to="https://youtu.be/BS4TUd7FJSg"><i className="fas fa-play-circle"></i></Link>
                                        <h3>How IT Work </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="section-thumb">
                                <img src="assets/images/about/abt.jpg" alt="Thumb" />
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
            <div className="team-section style-6 pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-head text-center pb-55">
                                <h5>Team Members</h5>
                                <h3>Meet Our Experienced </h3>
                                <h2>Engineers</h2>
                                <span className="section-head-bar-2"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="single-team-member mb-30">
                                <div className="team-member-thumb">
                                    <img src="assets/images/team/tm1.png" alt="Team" />
                                </div>
                                <div className="team-member-social-icon">
                                    <ul>
                                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="team-member-intro-section">
                                    <h2>Angel Zara</h2>
                                    <p>Migration Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="single-team-member mb-30">
                                <div className="team-member-thumb">
                                    <img src="assets/images/team/tm2.png" alt="Team" />
                                </div>
                                <div className="team-member-social-icon">
                                    <ul>
                                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="team-member-intro-section">
                                    <h2>Shene Watsan</h2>
                                    <p>Visa Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="single-team-member mb-30">
                                <div className="team-member-thumb">
                                    <img src="assets/images/team/tm3.png" alt="Team" />
                                </div>
                                <div className="team-member-social-icon">
                                    <ul>
                                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="team-member-intro-section">
                                    <h2>Fahmida Haque</h2>
                                    <p>Co-Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="single-team-member mb-30">
                                <div className="team-member-thumb">
                                    <img src="assets/images/team/tm2.png" alt="Team" />
                                </div>
                                <div className="team-member-social-icon">
                                    <ul>
                                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="team-member-intro-section">
                                    <h2>Shene Watsan</h2>
                                    <p>Visa Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="single-team-member mb-30">
                                <div className="team-member-thumb">
                                    <img src="assets/images/team/tm3.png" alt="Team" />
                                </div>
                                <div className="team-member-social-icon">
                                    <ul>
                                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="team-member-intro-section">
                                    <h2>Fahmida Haque</h2>
                                    <p>Co-Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="single-team-member mb-30">
                                <div className="team-member-thumb">
                                    <img src="assets/images/team/tm1.png" alt="Team" />
                                </div>
                                <div className="team-member-social-icon">
                                    <ul>
                                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="team-member-intro-section">
                                    <h2>Angel Zara</h2>
                                    <p>Migration Agent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;