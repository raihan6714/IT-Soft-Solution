import React from 'react';
import About from '../About/About';
import Achivements from '../Achivements/Achivements';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import OurProjects from '../OurProjects/OurProjects';
import OurService from '../OurService/OurService';
import Process from '../Process/Process';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <Slider />
            <Banner />
            <About />
            <OurService />
            <WhyChooseUs />
            <Achivements />
            <Process />
            <OurProjects />
            <Testimonial />
            <Client />
        </>
    );
};

export default Home;