import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <>
            <div className="breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="breadcumb-content">
                            <h1>Pricing</h1>
                            <ul>
                                <li><Link to="/hme">Home</Link></li>
                                <li><i className="fa fa-angle-right"></i></li>
                                <li>Pricing</li>
                            </ul>
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
                                <h3>Choose Your Best </h3>
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
        </>
    );
};

export default Pricing;