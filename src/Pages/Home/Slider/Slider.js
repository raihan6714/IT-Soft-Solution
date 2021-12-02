import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <>
            <div className="carousel-slider-section style-nine">
                <div className="container-fluid">
                    <div className="owl-carousel slider-carousel2">
                        <div className="carousel-slider2  white d-flex align-items-center" style={{ background: 'transparent' }}>
                            <div className="layer-image" style={{ background: 'url(assets/images/hero/itsoft1.png) no-repeat center /cover scroll' }}>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="carousel-slider-content">
                                            <h4 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s" >SECURE & IT SERVICE</h4>
                                            <div className="wow fadeInDown" data-wow-duration="2s" data-wow-delay=".5s">
                                                <h1 className="text-white"  >Transformation is <br />at the with Technologis</h1>
                                            </div>
                                            <p className="wow fadeInDown" data-wow-duration="2s" data-wow-delay=".5s">Authoritatively transform adaptive manufactured products before networks. Authoritatively disintermediate.</p>
                                            <div className="carousel-btn-area mt-60 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".5s">
                                                <div className="btn-common btn-carousel-slider">
                                                    <Link to="#">LEARN MORE</Link>
                                                </div>
                                                <div className="btn-common btn-carousel-slider-2">
                                                    <Link to="#">GET IN TOUCH</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-slider2 style-fourteen white d-flex align-items-center" style={{ background: 'transparent' }}>
                            <div className="layer-image" style={{ background: 'url(assets/images/about/banner-2.jpg) no-repeat center /cover scroll' }}>
                            </div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="carousel-slider-content">
                                            <h4 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s" >SECURE & IT SERVICE</h4>
                                            <h1 className="text-white wow fadeInDown" data-wow-duration="2s" data-wow-delay=".5s" >Transformation is with  <br /> Technologis</h1>
                                            <p className="wow fadeInDown" data-wow-duration="2s" data-wow-delay=".5s">Authoritatively transform adaptive manufactured products before networks. Authoritatively disintermediate.</p>
                                            <div className="carousel-btn-area mt-60 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".5s">
                                                <div className="btn-common btn-carousel-slider">
                                                    <Link to="#">LEARN MORE</Link>
                                                </div>
                                                <div className="rs-video">
                                                    <div className="animate-border">
                                                        <Link className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" to="https://www.youtube.com/watch?v=Wx48y_fOfiY">
                                                            <i className="fa fa-play"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="banner-thumb">
                                            <img src="assets/images/about/women.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-slider2 style-fourteen white d-flex align-items-center" style={{ background: 'transparent' }}>
                            <div className="layer-image" style={{ background: 'url(assets/images/about/banner-4.jpg) no-repeat center /cover scroll' }}>
                            </div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="carousel-slider-content">
                                            <h4 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0s" >SECURE & IT SERVICE</h4>
                                            <h1 className="text-white wow fadeInDown" data-wow-duration="2s" data-wow-delay=".5s" >Transformation is with  <br /> Business</h1>
                                            <p className="wow fadeInDown" data-wow-duration="2s" data-wow-delay=".5s">Authoritatively transform adaptive manufactured products before networks. Authoritatively disintermediate.</p>
                                            <div className="carousel-btn-area mt-60 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".5s">
                                                <div className="btn-common btn-carousel-slider">
                                                    <Link to="#">LEARN MORE</Link>
                                                </div>
                                                <div className="rs-video">
                                                    <div className="animate-border">
                                                        <Link className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" to="https://www.youtube.com/watch?v=Wx48y_fOfiY">
                                                            <i className="fa fa-play"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="banner-thumb">
                                            <img src="assets/images/about/banner-3.png" alt="" />
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

export default Slider;