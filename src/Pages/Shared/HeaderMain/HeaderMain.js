import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <>
            <header uk-sticky="bottom: #offset">
                <div className="container">
                    <div className="menu-wrapper">
                        <div className="m-logo">
                            <Link to="/"><span className="logo-txt"></span></Link>
                        </div>
                        <div className="logo">
                            <Link to="index.html">
                                <img src="assets/images/logo.png" alt="logo" />
                                <img src="assets/images/footer/logo2.png" alt="logo" />
                            </Link>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Company<i className="fas fa-angle-down"></i><span><i className="fas fa-angle-right"></i></span></Link>
                                    <ul className="sub-menu">
                                        <li><Link to="about-us.html">About Us </Link></li>
                                        <li><Link to="#">Elements <i className="fas fa-angle-right"></i> </Link>
                                            <ul className="inner-sub-menu">
                                                <li><Link to="info-box.html">Info Box</Link></li>
                                                <li><Link to="services.html">Services</Link></li>
                                                <li><Link to="teams.html">Teams</Link></li>
                                                <li><Link to="testimonial.html">Testimonial</Link></li>
                                                <li><Link to="pricing.html">Pricing</Link></li>
                                                <li><Link to="faq.html">FAQ</Link></li>
                                                <li><Link to="project.html">Project</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="why-choose-us.html">Why Choose Us </Link></li>
                                        <li><Link to="our-services.html">Our Services </Link></li>
                                        <li><Link to="single-service.html">Single Services </Link></li>
                                        <li><Link to="our-team.html">Our Team </Link></li>
                                        <li><Link to="single-team.html">Single Team </Link></li>
                                        <li><Link to="contact-us.html">Contact Us </Link></li>
                                        <li><Link to="pricing.html">Pricing </Link></li>
                                        <li><Link to="faq.html">FAQ </Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="#">Services<i className="fas fa-angle-down"></i><span><i className="fas fa-angle-right"></i></span></Link>
                                    <ul className="sub-menu">
                                        <li><Link to="it-services.html">IT Services</Link></li>
                                        <li><Link to="web-development.html">Web Development</Link></li>
                                        <li><Link to="single-service.html">Single Service</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact</Link>
                                </li>
                            </ul>
                            <div className="nav-btn  d-sm-none d-md-none d-lg-inline-block">
                                <Link to="/">Get Consultant</Link>
                            </div>
                            <div className="mm-social-icon d-lg-none mt-40">
                                <span><Link to="#"><i className="fab fa-facebook-f"></i></Link></span>
                                <span><Link to="#"><i className="fab fa-twitter"></i></Link></span>
                                <span><Link to="#"><i className="fab fa-pinterest"></i></Link></span>
                                <span><Link to="#"><i className="fab fa-linkedin-in"></i></Link></span>
                            </div>
                        </nav>
                        <div className="menu-toggle">
                            <span className="open_bar"><i className="fas fa-bars"></i></span>
                            <span className="close_bar"><i className="fas fa-times"></i></span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderMain;