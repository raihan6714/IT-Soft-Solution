import React from 'react';
import { Link } from 'react-router-dom';

const Portfolios = () => {
    return (
        <>
            <div className="portfolio-section pt-80 pb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-head text-center pb-55">
                                <h5>Our Projects</h5>
                                <h3>Check Out </h3>
                                <h2>Our Latest Project</h2>
                                <span className="section-head-bar-2"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="portfolio_nav">
                                <div className="portfolio_menu">
                                    <ul className="menu-filtering">
                                        <li className="current_menu_item" data-filter="*">All Works </li>
                                        <li data-filter=".branding">Branding</li>
                                        <li data-filter=".design">Design</li>
                                        <li data-filter=".development">Development</li>
                                        <li data-filter=".graphics">Graphice </li>
                                        <li data-filter=".portfolio">Portfolio </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row image_load">
                        <div className="col-lg-3 col-md-6 col-sm-12 p-0 grid-item design cemes">
                            <div className="single_portfolio">
                                <div className="portfolio-thumb">
                                    <img src="assets/images/portfolio/pf1.jpg" alt="Portfolio" />
                                    <div className="portfolio-icon">
                                        <div className="port-icon">
                                            <a className="port-icon venobox vbox-item" data-gall="myportfolio"
                                                href="assets/images/portfolio/pf1.jpg"><i className="fas fa-image"></i>
                                            </a>
                                            <Link to="project-details.html"><i className="fas fa-link"></i></Link>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <h5><Link to="case-study-details.html">UX/UI Design</Link></h5>
                                        <p>Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 p-0 grid-item portfolio cemes">
                            <div className="single_portfolio">
                                <div className="portfolio-thumb">
                                    <img src="assets/images/portfolio/pf2.jpg" alt="Portfolio" />
                                    <div className="portfolio-icon">
                                        <div className="port-icon">
                                            <a className="port-icon venobox vbox-item" data-gall="myportfolio"
                                                href="assets/images/portfolio/pf2.jpg"><i className="fas fa-image"></i>
                                            </a>
                                            <Link to="project-details.html"><i className="fas fa-link"></i></Link>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <h5><Link to="case-study-details.html">Project Analicys</Link></h5>
                                        <p>portfolio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 p-0 grid-item  development  cemes">
                            <div className="single_portfolio">
                                <div className="portfolio-thumb">
                                    <img src="assets/images/portfolio/pf3.jpg" alt="Portfolio" />
                                    <div className="portfolio-icon">
                                        <div className="port-icon">
                                            <a className="port-icon venobox vbox-item" data-gall="myportfolio"
                                                href="assets/images/portfolio/pf3.jpg"><i className="fas fa-image"></i>
                                            </a>
                                            <Link to="project-details.html"><i className="fas fa-link"></i></Link>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <h5><Link to="case-study-details.html">Network Management</Link></h5>
                                        <p>Development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 p-0 grid-item  development  cemes">
                            <div className="single_portfolio">
                                <div className="portfolio-thumb">
                                    <img src="assets/images/portfolio/pf4.jpg" alt="Portfolio" />
                                    <div className="portfolio-icon">
                                        <div className="port-icon">
                                            <a className="port-icon venobox vbox-item" data-gall="myportfolio"
                                                href="assets/images/portfolio/pf4.jpg"><i className="fas fa-image"></i>
                                            </a>
                                            <Link to="project-details.html"><i className="fas fa-link"></i></Link>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <h5><Link to="case-study-details.html">IT Solution</Link></h5>
                                        <p>Development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 p-0 grid-item  branding  cemes">
                            <div className="single_portfolio">
                                <div className="portfolio-thumb">
                                    <img src="assets/images/portfolio/pf5.jpg" alt="Portfolio" />
                                    <div className="portfolio-icon">
                                        <div className="port-icon">
                                            <a className="port-icon venobox vbox-item" data-gall="myportfolio"
                                                href="assets/images/portfolio/pf5.jpg"><i className="fas fa-image"></i>
                                            </a>
                                            <Link to="project-details.html"><i className="fas fa-link"></i></Link>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <h5><Link to="case-study-details.html">Corporate Branding</Link></h5>
                                        <p>Branding</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 p-0 grid-item  portfolio  cemes">
                            <div className="single_portfolio">
                                <div className="portfolio-thumb">
                                    <img src="assets/images/portfolio/pf2.jpg" alt="Portfolio" />
                                    <div className="portfolio-icon">
                                        <div className="port-icon">
                                            <a className="port-icon venobox vbox-item" data-gall="myportfolio"
                                                href="assets/images/portfolio/pf2.jpg"><i className="fas fa-image"></i>
                                            </a>
                                            <Link to="project-details.html"><i className="fas fa-link"></i></Link>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <h5><Link to="case-study-details.html"> Portfolio Branding</Link></h5>
                                        <p>Portfolio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 p-0 grid-item design cemes">
                            <div className="single_portfolio">
                                <div className="portfolio-thumb">
                                    <img src="assets/images/portfolio/pf1.jpg" alt="Portfolio" />
                                    <div className="portfolio-icon">
                                        <div className="port-icon">
                                            <a className="port-icon venobox vbox-item" data-gall="myportfolio"
                                                href="assets/images/portfolio/pf1.jpg"><i className="fas fa-image"></i>
                                            </a>
                                            <Link to="project-details.html"><i className="fas fa-link"></i></Link>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <h5><Link to="case-study-details.html">UX/UI Design</Link></h5>
                                        <p>Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 p-0 grid-item portfolio cemes">
                            <div className="single_portfolio">
                                <div className="portfolio-thumb">
                                    <img src="assets/images/portfolio/pf2.jpg" alt="Portfolio" />
                                    <div className="portfolio-icon">
                                        <div className="port-icon">
                                            <a className="port-icon venobox vbox-item" data-gall="myportfolio"
                                                href="assets/images/portfolio/pf8.jpg"><i className="fas fa-image"></i>
                                            </a>
                                            <Link to="project-details.html"><i className="fas fa-link"></i></Link>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <h5><Link to="case-study-details.html">Project Analicys</Link></h5>
                                        <p>portfolio</p>
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

export default Portfolios;