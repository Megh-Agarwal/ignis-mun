import { useState } from 'react';
import axios from 'axios';

import Header from './Header/Header';
import Card from './Card';
import Alert from './Alert';
import './Matrix.css';

const Allocations = () => {

    const [isShown, setIsShown] = useState(false);
    const [country, setCountry] = useState('');
    const [countryData, setCountryData] = useState(null);
    const [isErr, setIsErr] = useState(false);

    function findCountry(e) {
        e.preventDefault();
        setIsErr(false);
        let com = null;
        axios.get('https://ignismun.in/backend/matrix/' + country.toUpperCase())
        .then(res => {
            try {
                if (res.data.allocations.length !== 0) {
                    console.log(res.data)
                    setCountryData(res.data.allocations);
                    setIsShown(true);
                    com = true;
                }
    
                if (!com) {
                    setIsShown(false);
                    setIsErr(true)
                }
            } catch (e) {
                setIsShown(false)
                setIsErr(true)
            }
        })
    }

    return (
        <div>
            <Header country={country} setCountry={setCountry} findCountry={findCountry} />
            {isShown && 
                <div className="font-serif text-base text-gray-700 md:text-lg cont transform -translate-y-20 md:-translate-y-10 lg:transform-none">
                    <p className="m-5">The country matrix is printed below:</p>
                    <Card countryData={countryData}/>
                </div>
            }
            {isErr && <Alert />}
        </div>
    )
}

export default Allocations