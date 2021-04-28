import { useState } from 'react';

import Header from './Header/Header';
import Card from './Card';
import Alert from './Alert';
import './Allocations.css';

const data = [
    { email: 'example@example.com', abbreviation: 'WHO', committee: 'World Health Organization' },
    { email: 'example2@example2.com', abbreviation: 'DISEC', committee:'The Disarmament and International Security Committe'},
    { email: 'example3@example3.com', abbreviation: 'UNSC', committee: 'United Nations Security Council' }
]

const Allocations = () => {

    const [email, setEmail] = useState('');
    const [isShown, setIsShown] = useState(false);
    const [comData, setComData] = useState(null);
    const [isErr, setIsErr] = useState(false);

    function findCommittee(e) {
        e.preventDefault();
        setIsErr(false);
        let com = null;
        data.forEach(item => {
            if (item.email === email) {
                setComData(item);
                setIsShown(true);
                com = 'exists';
            }
        });
        if (!com) {
            setIsShown(false);
            setIsErr(true)
        }
    }

    return (
        <div>
            <Header email={email} setEmail={setEmail} findCommittee={findCommittee} />
            {isShown && 
                <div className="font-serif text-base text-gray-700 md:text-lg cont">
                    <p>You have been allocated to:</p>
                    <br/>
                    <Card comData={comData} />
                </div>
            }
            {isErr && <Alert />}
        </div>
    )
}

export default Allocations