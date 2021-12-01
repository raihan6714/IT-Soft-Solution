import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row footer-hr">
                    <div className="col-md-6 col-lg-3">
                        <div className="widget">
                            <div className="about-company">
                                <div className="footer-logo">
                                    <img src="assets/images/footer/logo2.png" alt="Footer-logo" />
                                </div>
                                <p>We are the best world Information Technology Company. Providing the highest quality.</p>
                                <div className="footer-about-social-icon">
                                    <ul>
                                        <li>
                                            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget">
                            <div className="footer-quick-link">
                                <div className="footer-widget-title">
                                    <h5>Quick Links</h5>
                                </div>
                                <div className="footer-quick-link-list">
                                    <ul>
                                        <li><Link to="#">Customers Services</Link></li>
                                        <li><Link to="#">IT Department</Link></li>
                                        <li><Link to="#">About Our Company</Link></li>
                                        <li><Link to="#">Business Growth</Link></li>
                                        <li><Link to="#">Make An Appointment</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget">
                            <div className="footer-contact">
                                <div className="footer-widget-title">
                                    <h5>Contacts</h5>
                                </div>
                                <p><b>Adress: </b>27 Division St, New York, NY 10002, USA</p>
                                <p><b>Phone: </b> +880 834526714 <br />Fax: +8 91230 456 788</p>
                                <p><b>Email: </b> abu.rahan14@mail.com <br /> Website: your website.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget">
                            <div className="footer-popular-post ">
                                <div className="footer-widget-title">
                                    <h5>Popular Post</h5>
                                </div>
                                <div className="footer-popular-single-post d-flex">
                                    <div className="single-post-img">
                                        <Link to="#">
                                            <img src="assets/images/footer/add1.jpg" alt="footer-post" />
                                        </Link>
                                    </div>
                                    <div className="popular-post-title">
                                        <Link to="#">
                                            <h6>Plan Your Project with Your Software </h6>
                                        </Link>
                                        <p>January 01, 2021</p>
                                    </div>
                                </div>
                                <div className="footer-popular-single-post d-flex">
                                    <div className="single-post-img">
                                        <Link to="#">
                                            <img src="assets/images/footer/add2.jpg" alt="footer-post" />
                                        </Link>
                                    </div>
                                    <div className="popular-post-title">
                                        <Link to="#">
                                            <h6>You have a Great Business Idea? </h6>
                                        </Link>
                                        <p>January 01, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterLinks;