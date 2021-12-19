import React from 'react';

const Appoinment = () => {
    return (
        <>
            <div className="contact-us pt-90 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
                            <div className="contact_from_box">
                                <div className="contact_title pb-4">
                                    <h3>Get In Touch</h3>
                                </div>
                                <form id="contact_form" action="" method="POST" >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form_box mb-30">
                                                <input type="text" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box mb-30">
                                                <input type="email" name="email" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box mb-30">
                                                <input type="text" name="phone" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box mb-30">
                                                <input type="text" name="web" placeholder="Website" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form_box mb-30">
                                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                                            </div>
                                            <div className="quote_btn">
                                                <button className="btn" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-message"></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
                            <div className="cda-content-area">
                                <div className="cda-single-content d-flex">
                                    <div className="cda-icon">
                                        <i className="flaticon-time"></i>
                                    </div>
                                    <div className="cda-content-inner">
                                        <h4>Company Location</h4>
                                        <p>Durham Street Hialeah, <br />FL 33010, USA</p>
                                    </div>
                                </div>
                                <div className="cda-single-content hr d-flex">
                                    <div className="cda-icon">
                                        <i className="flaticon-call"></i>
                                    </div>
                                    <div className="cda-content-inner">
                                        <h4>Telephone Number</h4>
                                        <p>+880 636 524 265,  <br />+880 636 524 265, </p>
                                    </div>
                                </div>
                                <div className="cda-single-content hr d-flex">
                                    <div className="cda-icon">
                                        <i className="flaticon-next-1"></i>
                                    </div>
                                    <div className="cda-content-inner">
                                        <h4>Our Email Address</h4>
                                        <p>yourinfo@gmail.com <br />yourmail@gmail.com</p>
                                    </div>
                                </div>
                                <div className="cda-single-content hr d-flex">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Appoinment;