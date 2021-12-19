import React from 'react';

const Map = () => {
    return (
        <>
            <div className="map-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48384.367867189205!2d-74.01058227968896!3d40.71751035716885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1609671967457!5m2!1sen!2sbd" width="1920" height="350" style={{ border: '0', allowFullScreen: '', ariaHidden: 'false', tabindex: '0' }}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Map;