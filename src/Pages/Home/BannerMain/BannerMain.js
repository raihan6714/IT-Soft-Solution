import React from "react";
import { Link } from "react-router-dom";

const BannerMain = () => {
  return (
    <div>
      <div className="hero-section style-2 align-items-center d-flex">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-content-area text-center">
                <div className="video-icon">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://www.youtube.com/watch?v=Wx48y_fOfiY"
                  >
                    <i className="fas fa-play-circle"></i>
                  </a>
                </div>
                <div className="hero-content text-center">
                  <h1 className="text-white">
                    Strong & Certified <br />
                    IT Solution Services
                  </h1>
                  <p className="text-white">
                    Perferendis repdae fugia rchitecto beatae rederit.
                  </p>
                  <div className="btn-common btn-hero">
                    <Link to="/">
                      How IT Work <i className="fas fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMain;
