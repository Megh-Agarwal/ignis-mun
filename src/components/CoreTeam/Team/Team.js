import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import EC from '../../EC/EC';
import Spinner from '../../Committee/Spinner';

export const Team = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [modalState, setModalState] = useState({ state: '' });

    function showSuccess(message) {
        setModalState({ state: "success", message });
    }

    useEffect(() => {
        fetch("https://ignismun.in/backend/core-team")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.team);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    function getCoreTeam() {
        
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Spinner/>;
    } else {
        return (
            <div className="font-serif">
                <Transition.Root show={modalState.state === "success"} open={modalState.state === "success"} as={Fragment}>
                    <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" onClose={() => {
                        setModalState(false);
                    }}>
                        <div className="font-serif flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-100"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-100"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div className="inline-block align-bottom bg-gray-50 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-900 text-justify">
                                                    {modalState.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-yellow-500 to-red-600 sm:text-sm"
                                            onClick={() => {
                                                setModalState(false);
                                            }}
                                        >
                                            Go back
                                        </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <a href="/" className="mb-6 sm:mx-auto">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
                                stroke="white"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                            </div>
                        </a>
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-serif text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                <defs>
                                    <pattern
                                    id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                    >
                                    <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                                    width="52"
                                    height="24"
                                />
                                </svg>
                                <span className="relative">Our</span>
                            </span>{' '}
                            Core team
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Meet our talented team!
                            </p>
                            <hr className="w-full my-8 border-gray-300" />
                        </div>
                    <div>
                </div>
            </div>
                    <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
                        {items.map(item => (
                            <div className="grid sm:grid-cols-3">
                                <div className="relative w-full h-48 max-h-full sm:h-auto md:flex">
                                    <img
                                        className="absolute w-full h-full object-scale-down lg:object-cover rounded sm:flex-shrink-0"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>
                                <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                                    <p className="text-lg font-bold">{item.name}</p>
                                    <p className="mb-4 text-xs text-gray-800">{item.position}</p>
                                    <p className="mb-4 text-sm tracking-wide text-gray-800">
                                        {item.testimonial.split('. ')[0]}...<br></br><br></br><button
                                            type="button"
                                            className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-yellow-500 to-red-600 sm:text-sm"
                                            onClick={() => {
                                                showSuccess(item.testimonial);
                                            }}
                                        >
                                            Read more
                                        </button>
                                    </p>
                                    <div className="flex items-center space-x-3">
                                        <a
                                            href={item.social}
                                            className="text-gray-500 transition-colors duration-300 hover:text-orange-600"
                                        >
                                            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                            <circle cx="15" cy="15" r="4" />
                                            <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <EC/>
            </div>
        );
    }
};

export default Team;