import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import ContactBreadcumb from '../ContactBreadcumb/ContactBreadcumb';
import Map from '../Map/Map';

const Contact = () => {
    return (
        <div>
            <ContactBreadcumb />
            <Appoinment />
            <Map />
        </div>
    );
};

export default Contact;