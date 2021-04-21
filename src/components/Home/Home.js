import React from 'react';
import Header from './Header/Header';
import AboutUs from '../Content/Home/AboutUs';
import SecGeneralAddress from '../Content/Home/SecGeneralAddress';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <SecGeneralAddress></SecGeneralAddress>
        </div>
    )
}

export default Home