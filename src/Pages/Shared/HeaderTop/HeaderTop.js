import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTop = () => {
    return (
        <>
            <div className="header-top-area d-sm-none d-md-none d-lg-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="header-top-left-items">
                                <div className="header-top-left-single-item">
                                    <Link to="/">
                                        <div className="header-top-left-icon">
                                            <span>
                                                <i className="far fa-envelope"></i>
                                                example@example.com
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="header-top-left-single-item">
                                    <Link to="/">
                                        <div className="header-top-left-icon">
                                            <span>
                                                <i className="fas fa-street-view"></i>
                                                1st Floor New World.
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="header-top-left-single-item">
                                    <Link to="/">
                                        <div className="header-top-left-icon">
                                            <span>
                                                <i className="fas fa-phone"></i>
                                                +880 320 432 242
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="header-top-right-items text-right">
                                <div className="header-top-right-icon-area">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="fab fa-instagram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="fab fa-dribbble"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;