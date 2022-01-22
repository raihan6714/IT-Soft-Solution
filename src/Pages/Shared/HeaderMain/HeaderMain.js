import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <>
            <header uk-sticky="bottom: #offset">
                <div className="container">
                    <div className="menu-wrapper">
                        <div className="m-logo">
                            <NavLink to="/"><span className="logo-txt"></span></NavLink>
                        </div>
                        <div className="logo">
                            <NavLink to="/">
                                <img src="assets/images/logo.png" alt="logo" />
                                <img src="assets/images/footer/logo2.png" alt="logo" />
                            </NavLink>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Company<i className="fas fa-angle-down"></i><span><i className="fas fa-angle-right"></i></span></Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/about-us">About Us </Link></li>
                                        <li><Link to="/why-choose-us">Why Choose Us </Link></li>
                                        <li><Link to="/our-services">Our Services </Link></li>
                                        <li><Link to="/single-service">IT Consultancy </Link></li>
                                        <li><Link to="/our-team">Our Team </Link></li>
                                        <li><Link to="/team-details">Team Details </Link></li>
                                        <li><Link to="/contact">Contact Us </Link></li>
                                        <li><Link to="/pricing">Pricing </Link></li>
                                        <li><Link to="/faq">FAQ </Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="#">Services<i className="fas fa-angle-down"></i><span><i className="fas fa-angle-right"></i></span></Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/it-services">IT Services</Link></li>
                                        <li><Link to="/web-development">Web Development</Link></li>
                                        <li><Link to="/single-service">IT Consultancy</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/portfolio">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <div className="nav-btn  d-sm-none d-md-none d-lg-inline-block">
                                <Link to="/login">Login</Link>
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