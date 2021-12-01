import React from 'react';
import { Link } from 'react-router-dom';

const FooterCopyRight = () => {
    return (
        <div className="footer-copyright-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="footer-copyright-text">
                            <p>&copy; 2021 - itsoft all rights reserved. </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="footer-copyright-link">
                            <ul>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                                <li><Link to="#">Services</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterCopyRight;