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
    const [delegateData, setDelegateData] = useState(null);
    const [isErr, setIsErr] = useState(false);

    function findCommittee(e) {
        e.preventDefault();
        setIsErr(false);
        let com = null;
        axios.get('https://ignismun.in/backend/allocations/' + email)
            .then(res => {
                if (res.data.allocations.length !== 0) {
                    console.log(res.data)
                    setComData(res.data.allocations[0].committee);
                    setDelegateData(res.data.allocations[0]);
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
            {isShown && 
                <div className="font-serif text-base text-gray-700 md:text-lg cont">
                    <p className="m-5">You have been allocated to:</p>
                    <Card comData={comData} delegateData={delegateData}/>
                </div>
            }
            {isErr && <Alert />}
        </div>
    )
}

export default Allocations