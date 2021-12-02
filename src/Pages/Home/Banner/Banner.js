import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="feature-section">
                <div className="container">
                    <div className="row navigation-mrg">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="feature-single-item">
                                <div className="feature-icon">
                                    <i className="flaticon-left-quote"></i>
                                </div>
                                <div className="feature-content">
                                    <h4>Trusted Services</h4>
                                    <p>Cupidatat non proidient sunt culpa qui officia deserunt mollit anim</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="feature-single-item">
                                <div className="feature-icon">
                                    <i className="flaticon-call"></i>
                                </div>
                                <div className="feature-content">
                                    <h4>24/7 Support</h4>
                                    <p>Cupidatat non proidient sunt culpa qui officia deserunt mollit anim</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="feature-single-item">
                                <div className="feature-icon">
                                    <i className="flaticon-developer"></i>
                                </div>
                                <div className="feature-content">
                                    <h4>Expert & Professional</h4>
                                    <p>Cupidatat non proidient sunt culpa qui officia deserunt mollit anim</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;