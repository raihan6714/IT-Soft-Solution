import React from 'react';
import { Link } from 'react-router-dom';

const BlogInfo = () => {
    return (
        <>
            <div className="breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="breadcumb-content">
                            <h1>Blog</h1>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><i className="fa fa-angle-right"></i></li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogInfo;