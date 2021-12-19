import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    return (
        <>
            <div className="breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="breadcumb-content">
                            <h1>Faq</h1>
                            <ul>
                                <li><Link to="/hme">Home</Link></li>
                                <li><i className="fa fa-angle-right"></i></li>
                                <li>Faq</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-sectiion pt-75 pb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-head text-center pb-55">
                                <h5>F A Q</h5>
                                <h3>Frequently Ask Any </h3>
                                <h2>Question Here</h2>
                                <span className="section-head-bar-2"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div id="accordion">
                                <h3 className="acc-title">Internet Things <i className="fas fa-angle-down"></i></h3>
                                <div className="acc-content">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                                </div>
                                <h3 className="acc-title"> Artificial Intelligence <i className="fas fa-angle-down"></i></h3>
                                <div className="acc-contcol-md-6 ent">
                                    <p>Since 2007 we have been a visionary and a reliable software design engineering partner for world-class brands. We are a boutique digital transformation consultancy. </p>
                                </div>
                                <h3 className="acc-title"> Cloud Computing <i className="fas fa-angle-down"></i></h3>
                                <div className="acc-content">
                                    <p>Since 2007 we have been a visionary and a reliable software process engineering partner for world-class brands. We are a boutique digital transformation consultancy. </p>
                                </div>
                                <h3 className="acc-title"> Data Analicys Things <i className="fas fa-angle-down"></i></h3>
                                <div className="acc-content">
                                    <p>Since 2007 we have been a visionary and a reliable software design engineering partner for world-class brands. We are a boutique digital transformation consultancy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div id="accordion-2">
                                <h3 className="acc-title">Internet Things <i className="fas fa-angle-down"></i></h3>
                                <div className="acc-content">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                                </div>
                                <h3 className="acc-title"> Artificial Intelligence <i className="fas fa-angle-down"></i></h3>
                                <div className="acc-content">
                                    <p>Since 2007 we have been a visionary and a reliable software design engineering partner for world-class brands. We are a boutique digital transformation consultancy. </p>
                                </div>
                                <h3 className="acc-title"> Cloud Computing <i className="fas fa-angle-down"></i></h3>
                                <div className="acc-content">
                                    <p>Since 2007 we have been a visionary and a reliable software process engineering partner for world-class brands. We are a boutique digital transformation consultancy. </p>
                                </div>
                                <h3 className="acc-title"> Data Analicys Things <i className="fas fa-angle-down"></i></h3>
                                <div className="acc-content">
                                    <p>Since 2007 we have been a visionary and a reliable software design engineering partner for world-class brands. We are a boutique digital transformation consultancy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;