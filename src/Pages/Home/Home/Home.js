import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <>
            <Slider />
            <Banner />
            <About />
        </>
    );
};

export default Home;