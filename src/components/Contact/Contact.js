import {useState} from 'react';
import axios from 'axios';

import Header from "./Header/Header";
import '../../App.css';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [alertMsg, setAlertMsg] = useState(null);

	function handleSubmit(e) {
		e.preventDefault();
		setAlertMsg('loading');
		fetch('https://ignismun.in/backend/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				message
			})
		})
		.then(res => {
			res.json();
			console.log(res.ok);
			if (res.ok) {
				setAlertMsg(true);
			} else setAlertMsg(false);
		})
		.catch(err => console.log(err))
	}

	function renderAlert() {
		if (alertMsg === true) {
			return (
				<div class="mx-auto bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
				<div class="flex">
					<div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
					<div>
					<p class="font-bold">Success</p>
					<p class="text-sm">Your request has been sent, we will be revert back to you in the next 24-48 hours</p>
					</div>
				</div>
				</div>
			);
		} else if(alertMsg === false) {
			return (
				<div class="mx-auto bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
				<div class="flex">
					<div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
					<div>
					<p class="font-bold">Error</p>
					<p class="text-sm">There was an error</p>
					</div>
				</div>
				</div>
			);
		} else if (alertMsg === "loading") {
			return (
				<div class="mx-auto bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
				<p class="font-bold">Loading</p>
				</div>
			)
		} else return;
	}

    return (
        <div className="font-serif contact-container">
            <div className="flex flex-col justify-center py-6 sm:px-6 lg:px-8">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Contact Us</h2><br/>
                
				<div className="mt-8 w-full sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white lg:px-5 sm:mx-10 py-8 px-4 shadow sm:rounded-lg sm:px-10 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
							{renderAlert()}
							<div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                    Full name:
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        autoComplete="name"
                                        required
										value={name}
										onChange={e => setName(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
										value={email}
										onChange={e => setEmail(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Your message:
                                </label>
                                <div className="mt-1">
                                    <textarea
										style={{minHeight: "150px"}}
                                        id="message"
                                        rows="4"
                                        cols="50"
                                        required
										value={message}
										onChange={e => setMessage(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-red-600"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
			<div id="linear-loading"></div>
        </div>
    );
};

export default Contact;
