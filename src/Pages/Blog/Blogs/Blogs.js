import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <>
            <div className="blog-section style-7 bg-3 pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="blog-single-items">
                                        <div className="blog-thumb">
                                            <Link to="#">
                                                <img src="assets/images/blog/bg1.jpg" alt="Blog img" />
                                            </Link>
                                            <div className="blog-meta-top">
                                                <ul>
                                                    <li><Link to="#">Graphics</Link></li>
                                                    <li><Link to="#">Technology</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <span><Link to="#">Itsoft</Link></span> - <span>January 01, 2021</span>
                                            </div>
                                            <div className="blog-content-text text-center">
                                                <h5><Link to="single-blog.html">Plan Your Project with Your Software</Link></h5>
                                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache. Incididunt ander  </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-single-items">
                                        <div className="blog-thumb">
                                            <Link to="#">
                                                <img src="assets/images/blog/bg2.jpg" alt="Blog img" />
                                            </Link>
                                            <div className="blog-meta-top">
                                                <ul>
                                                    <li><Link to="#">Tips</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <span><Link to="#">Itsoft</Link></span> - <span>January 01, 2021</span>
                                            </div>
                                            <div className="blog-content-text text-center">
                                                <h5><Link to="single-blog.html">You have a Great Business Idea?</Link></h5>
                                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache. Incididunt ander  </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-single-items">
                                        <div className="blog-thumb">
                                            <Link to="#">
                                                <img src="assets/images/blog/bg3.jpg" alt="Blog img" />
                                            </Link>
                                            <div className="blog-meta-top">
                                                <ul>
                                                    <li><Link to="#">Development</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <span><Link to="#">Itsoft</Link></span> - <span>January 01, 2021</span>
                                            </div>
                                            <div className="blog-content-text text-center">
                                                <h5><Link to="single-blog.html">How to Make Website WCAG Compliant?</Link></h5>
                                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache. Incididunt ander  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="blog-single-items">
                                        <div className="blog-thumb">
                                            <Link to="#">
                                                <img src="assets/images/blog/bg3.jpg" alt="Blog img" />
                                            </Link>
                                            <div className="blog-meta-top">
                                                <ul>
                                                    <li><Link to="#">Tips</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <span><Link to="#">Itsoft</Link></span> - <span>January 01, 2021</span>
                                            </div>
                                            <div className="blog-content-text text-center">
                                                <h5><Link to="single-blog.html">The Next Big Challenge for Content Marketer</Link></h5>
                                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache. Incididunt ander  </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-single-items">
                                        <div className="blog-thumb">
                                            <Link to="#">
                                                <img src="assets/images/blog/bg4.jpg" alt="Blog img" />
                                            </Link>
                                            <div className="blog-meta-top">
                                                <ul>
                                                    <li><Link to="#">Design</Link></li>
                                                    <li><Link to="#">Technology</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <span><Link to="#">Itsoft</Link></span> - <span>January 01, 2021</span>
                                            </div>
                                            <div className="blog-content-text text-center">
                                                <h5><Link to="single-blog.html">The Future of Enterprise API Development</Link></h5>
                                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache. Incididunt ander  </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-single-items">
                                        <div className="blog-thumb">
                                            <Link to="#">
                                                <img src="assets/images/blog/bg5.jpg" alt="Blog img" />
                                            </Link>
                                            <div className="blog-meta-top">
                                                <ul>
                                                    <li><Link to="#">Graphics</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <span><Link to="#">Itsoft</Link></span> - <span>January 01, 2021</span>
                                            </div>
                                            <div className="blog-content-text text-center">
                                                <h5><Link to="single-blog.html">How To Make Your iOS 13 Compatible?</Link></h5>
                                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache. Incididunt ander  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pagination */}

                                <div className="pagination pt-30 pb-70 pl-10">
                                    <Link to="#" className="active">1</Link>
                                    <Link to="#">2</Link>
                                    <Link to="#"><i className="fas fa-angle-double-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="widget-items mb-40">
                                <form action="#" method="get" >
                                    <input type="text" className="src-input-box" placeholder="Search Here" name="s" defaultValue="" title="src-input-box" />
                                    <button className="src-icon" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="widget-items mb-40">
                                <div className="widget-title">
                                    <h2>Categories</h2>
                                </div>
                                <div className="catagory-item">
                                    <ul>
                                        <li className="hr-3"><Link to="#">Design</Link></li>
                                        <li className="hr-3"><Link to="#">Development</Link></li>
                                        <li className="hr-3"><Link to="#">Graphics</Link></li>
                                        <li className="hr-3"><Link to="#">Technology</Link></li>
                                        <li className="hr-3"><Link to="#">Tips</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-items mb-40">
                                <div className="widget-recent-post d-flex">
                                    <div className="rpost-thumb">
                                        <Link to="#"><img src="assets/images/widget/rp1.jpg" alt="post thumb" /></Link>
                                    </div>
                                    <div className="rpost-content">
                                        <div className="rpost-title">
                                            <Link to="#"><h4>Project with Your Software</h4>	</Link>
                                            <span>January 01, 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-recent-post d-flex hr-3">
                                    <div className="rpost-thumb">
                                        <Link to="#"><img src="assets/images/widget/rp2.jpg" alt="post thumb" /></Link>
                                    </div>
                                    <div className="rpost-content">
                                        <div className="rpost-title">
                                            <Link to="#"><h4>You have a Great Business Idea? </h4>	</Link>
                                            <span>January 01, 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-recent-post d-flex hr-3">
                                    <div className="rpost-thumb">
                                        <Link to="#"><img src="assets/images/widget/rp3.jpg" alt="post thumb" /></Link>
                                    </div>
                                    <div className="rpost-content">
                                        <div className="rpost-title">
                                            <Link to="#"><h4>How to Make Website WCAG Compliant? </h4>	</Link>
                                            <span>January 01, 2021</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-items mb-40">
                                <div className="widget-title">
                                    <h2>Tag Cloud</h2>
                                </div>
                                <div className="tag-item">
                                    <Link to="#">Bootstrap</Link>
                                    <Link to="#">Business</Link>
                                    <Link to="#">Corporate</Link>
                                    <Link to="#">Portfolio</Link>
                                    <Link to="#">Responsive</Link>
                                    <Link to="#">Technology</Link>
                                </div>
                            </div>
                            <div className="widget-items mb-40">
                                <div className="calender-area">
                                    <div className="widget-title">
                                        <h2>Calender</h2>
                                    </div>
                                    <div className="tag-item">
                                        <div className="curr-month"><b>january</b></div>
                                        <div className="all-days">
                                            <ul>
                                                <li>S</li>
                                                <li>M</li>
                                                <li>T</li>
                                                <li>W</li>
                                                <li>T</li>
                                                <li>F</li>
                                                <li>S</li>
                                            </ul>
                                        </div>
                                        <div className="all-date">
                                            <ul>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-items mb-40">
                                <div className="widget-title">
                                    <h2>Archives</h2>
                                </div>
                                <p className="hr-3">January 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;