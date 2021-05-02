import React from 'react';
import Header from './Header/Header';
import AboutUs from '../Content/Home/AboutUs';
import SecGeneralAddress from '../Content/Home/SecGeneralAddress';

const Home = () => {
    return (
        <div className="font-serif">
            <Header></Header>
            <SecGeneralAddress></SecGeneralAddress>
        </div>
    )
}

export default Home