import React from 'react';
import About from '../About/About';
import Achivements from '../Achivements/Achivements';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import Slider from '../Slider/Slider';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <Slider />
            <Banner />
            <About />
            <Client />
            <WhyChooseUs />
            <Achivements />
        </>
    );
};

export default Home;