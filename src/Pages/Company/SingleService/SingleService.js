import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = () => {
    return (
        <>
            <div className="breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="breadcumb-content">
                            <h1>IT Consultancy</h1>
                            <ul>
                                <li><Link to="/hme">Home</Link></li>
                                <li><i className="fa fa-angle-right"></i></li>
                                <li>IT Consultancy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-service pt-75 pb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="call-do-action">
                                <div className="top-link">
                                    <Link to="#">IT Consultancy<i className="fas fa-caret-right"></i></Link>
                                </div>
                                <div className="single-pack d-flex">
                                    <div className="pack-icon">
                                        <i className="flaticon-web"></i>
                                    </div>
                                    <div className="pack-content">
                                        <div className="pack-title"><h5>Detailed Service Pack</h5></div>
                                        <div className="get-pack"><Link to="#">Download PDF</Link></div>
                                    </div>
                                </div>
                                <div className="single-pack d-flex">
                                    <div className="pack-icon">
                                        <i className="flaticon-web"></i>
                                    </div>
                                    <div className="pack-content">
                                        <div className="pack-title"><h5>Detailed Service Pack</h5></div>
                                        <div className="get-pack"><Link to="#">Download Txt</Link></div>
                                    </div>
                                </div>
                                <div className="call-do-thumb">
                                    <img src="assets/images/call-do-action/cdasmi.jpg" alt="thumb" />
                                </div>
                                <div className="cda-content text-center">
                                    <h4>Our Appoinment Service Call Us</h4>
                                    <h3><i className="flaticon-process"></i> +123 456 7890</h3>
                                </div>
                            </div>
                            <form className="appointment-form text-center pt-40 pb-50 mt-25">
                                <div className="appoinment-title">
                                    <h3>Get A Consult</h3>
                                </div>
                                <input className="input-box" name="name" type="text" placeholder="Your Name" required="" />
                                <input className="input-box" name="email" type="email" placeholder="Your Email" required="" />
                                <input className="input-box" name="number" type="text" placeholder="Your Number" required="" />
                                <select name="select" className="input-box">
                                    <option value="">Your Inquiry About</option>
                                    <option value="">General Information Request</option>
                                    <option value="">Partner Relation</option>
                                    <option value="">Software Licensing</option>
                                </select>
                                <textarea className="input-box" name="messagebox" id="apm-txt-box" cols="30" rows="5" placeholder=" Your Message" required=""></textarea>
                                <input type="submit" className="ap-submit-btn" value="Send Request" />
                            </form>
                        </div>
                        <div className="col-lg-8">
                            <div className="section-thumb">
                                <img src="assets/images/services/sss1.jpg" alt="single service thumb" />
                            </div>
                            <div className="overview-content">
                                <h1 className="overview-title">Services Overview</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="pointment-single-feature">
                                        <div className="ap-feature-icon">
                                            <i className="flaticon-time"></i>
                                        </div>
                                        <div className="ap-feature-title">
                                            <h4>Global service</h4>
                                        </div>
                                        <div className="ap-feature-content">
                                            <p>It has survived not only five centurie</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="pointment-single-feature">
                                        <div className="ap-feature-icon">
                                            <i className="flaticon-content"></i>
                                        </div>
                                        <div className="ap-feature-title">
                                            <h4>Easy to integrate</h4>
                                        </div>
                                        <div className="ap-feature-content">
                                            <p>It has survived not only five centurie</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="pointment-single-feature">
                                        <div className="ap-feature-icon">
                                            <i className="flaticon-developer"></i>
                                        </div>
                                        <div className="ap-feature-title">
                                            <h4>Customer support</h4>
                                        </div>
                                        <div className="ap-feature-content">
                                            <p>It has survived not only five centurie</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ap-section-content">
                                <div className="overview-content">
                                    <h1 className="overview-title">Powerful strategies</h1>
                                    <p className="pb-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>

                                    <div className="row">
                                        <div className="col-md-6 col-lg-6">
                                            <div className="overview-thumb mb-30">
                                                <img src="assets/images/appointment/apm2.jpg" alt="appointment thumb" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="ap-content-inner d-flex">
                                                <div className="ap-content-icon">
                                                    <i className="far fa-check-circle"></i>
                                                </div>
                                                <div className="ap-content-text">Maecenas sed lorem eu dolor sodales</div>
                                            </div>
                                            <div className="ap-content-inner d-flex">
                                                <div className="ap-content-icon">
                                                    <i className="far fa-check-circle"></i>
                                                </div>
                                                <div className="ap-content-text">Aliquam sodales ipsum eu ante</div>
                                            </div>
                                            <div className="ap-content-inner d-flex">
                                                <div className="ap-content-icon">
                                                    <i className="far fa-check-circle"></i>
                                                </div>
                                                <div className="ap-content-text">Cras tristique elit nec ligula</div>
                                            </div>
                                            <div className="ap-content-inner d-flex">
                                                <div className="ap-content-icon">
                                                    <i className="far fa-check-circle"></i>
                                                </div>
                                                <div className="ap-content-text">Nam hendrerit tortor vel mi semper</div>
                                            </div>
                                            <div className="ap-content-inner d-flex">
                                                <div className="ap-content-icon">
                                                    <i className="far fa-check-circle"></i>
                                                </div>
                                                <div className="ap-content-text">Aenean at sem vel felis blandit</div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="pt-15 pb-25">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>

                                    <h1 className="overview-title pb-15">Our Expert Engineers</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="single-team-member">
                                        <div className="team-member-thumb">
                                            <img src="assets/images/team/tm1.png" alt="Team" />
                                        </div>
                                        <div className="team-member-social-icon">
                                            <ul>
                                                <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="team-member-intro-section">
                                            <h2>Angel Zara</h2>
                                            <p>Migration Agent</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="single-team-member">
                                        <div className="team-member-thumb">
                                            <img src="assets/images/team/tm2.png" alt="Team" />
                                        </div>
                                        <div className="team-member-social-icon">
                                            <ul>
                                                <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="team-member-intro-section">
                                            <h2>Shene Watsan</h2>
                                            <p>Visa Director</p>
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

export default SingleService;