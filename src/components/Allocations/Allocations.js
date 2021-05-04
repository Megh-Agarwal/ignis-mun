import { useState } from 'react';
import axios from 'axios';

import Header from './Header/Header';
import Card from './Card';
import Alert from './Alert';
import './Allocations.css';

const Allocations = () => {

    const [email, setEmail] = useState('');
    const [isShown, setIsShown] = useState(false);
    const [comData, setComData] = useState(null);
    const [isErr, setIsErr] = useState(false);

    function findCommittee(e) {
        e.preventDefault();
        setIsErr(false);
        let com = null;
        axios.get('http://13.232.18.191/backend/allocations/' + email)
            .then(res => {
                if (res.data.allocations.length !== 0) {
                    setComData(res.data.allocations[0].committee);
                    setIsShown(true);
                    com = true;
                }

                if (!com) {
                    setIsShown(false);
                    setIsErr(true)
                }
            })
    }

    return (
        <div>
            <Header email={email} setEmail={setEmail} findCommittee={findCommittee} />
            {/* {isShown && 
                <div className="font-serif text-base text-gray-700 md:text-lg cont">
                    <p>You have been allocated to:</p>
                    <br/>
                    <Card comData={comData} />
                </div>
            }
            {isErr && <Alert />} */}
        </div>
    )
}

export default Allocations