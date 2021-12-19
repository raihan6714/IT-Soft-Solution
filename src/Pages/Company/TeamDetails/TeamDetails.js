import React from 'react';
import { Link } from 'react-router-dom';

const TeamDetails = () => {
    return (
        <>
            <div className="breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="breadcumb-content">
                            <h1>Team Details</h1>
                            <ul>
                                <li><Link to="/hme">Home</Link></li>
                                <li><i className="fa fa-angle-right"></i></li>
                                <li>Team Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-member-section pt-75 pb-75">
                <div className="container">
                    <div className="member-intro-section">
                        <div className="row align-items-center">
                            <div className=" col-sm-12 col-md-6 col-lg-6">
                                <div className="member-thumb">
                                    <img src="assets/images/team/tm3.png" alt="single member" />
                                </div>
                            </div>
                            <div className=" col-sm-12 col-md-6 col-lg-6">
                                <div className="member-intro mb-30">
                                    <div className="m-name">
                                        <h3>Adam Jhone</h3>
                                    </div>
                                    <div className="m-designation">
                                        <span>Founder Of Company</span>
                                    </div>
                                    <ul>
                                        <li><b>Department:</b> Web Development</li>
                                        <li><b>Experience:</b> 15 Years</li>
                                        <li><b>Email:</b> example@gmail.com</li>
                                        <li><b>Phone:</b> +1-800-456-478-23</li>
                                    </ul>
                                    <div className="m-social-icon">
                                        <ul>
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="member-intro-section">
                        <div className="m-content">
                            <div className="intro-title pb-10"><h2>Biography</h2></div>
                            <p>A vast majority of the app marketers mainly concentrate on the post-launch app marketing techniques and measures while completely missing on the pre-launch campaign. This prevents the app to create buzz and hype just around the time when the app is launched. As and when you launch the app, already a considerable number of people should expectantly look forward to your app and this requires long-drawn marketing efforts leading up to the app launch event. To create pre-launch buzz and hype about the app a mobile app development company has an array of marketing options like social media campaign, search engine ads, video ads, email campaigns, etc. Apart from online options, you can also reach out to the wider audience with traditional marketing options like outdoor ads, print ads, media ads, and promotional events</p>
                        </div>
                    </div>
                    <div className="member-intro-section">
                        <div className="m-content">
                            <div className="intro-title pb-10"><h2>Experience</h2></div>
                            <div className="about-skills">
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <h6 className="skill-title">App Development</h6>
                                        <div className="skill-percentage clearfix">
                                            <div className="count-box">
                                                <span className="counter">90</span>
                                            </div>
                                            %
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="90"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <h6 className="skill-title">UI/UX Design</h6>
                                        <div className="skill-percentage clearfix">
                                            <div className="count-box">
                                                <span className="counter">80</span>
                                            </div>
                                            %
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="80"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <h6 className="skill-title">Web Development</h6>
                                        <div className="skill-percentage clearfix">
                                            <div className="count-box">
                                                <span className="counter">70</span>
                                            </div>
                                            %
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="70"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <h6 className="skill-title">Digital Marketing</h6>
                                        <div className="skill-percentage clearfix">
                                            <div className="count-box">
                                                <span className="counter">95</span>
                                            </div>
                                            %
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="95"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="appointment-section style-3 pt-40 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
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
                                <textarea className="input-box" name="messagebox" id="get-consult-txt" cols="30" rows="5" placeholder=" Your Message" required=""></textarea>
                                <input type="submit" className="ap-submit-btn" value="Send Request" />
                            </form>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetails;