import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
//import { CheckIcon } from '@heroicons/react/outline'

export const Team = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [modalState, setModalState] = useState({ state: '' });

    function showSuccess(message) {
        setModalState({ state: "success", message });
    }

    useEffect(() => {
        fetch("http://13.232.18.191/core-team")
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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="font-serif">
                <Transition.Root show={modalState.state === "success"} open={modalState.state === "success"} as={Fragment}>
                    <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" onClose={() => {
                        setModalState(false);
                    }}>
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

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
                                                <p className="text-sm text-gray-900">
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
                    <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                            Core Team
                        </p>
                        <p className="text-base text-gray-700 md:text-lg">
                            Meet our talented team!
                        </p>
                    </div>
                    <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
                        {items.map(item => (
                            <div className="grid sm:grid-cols-3">
                                <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto md:flex">
                                    <img
                                        className="absolute object-cover w-full h-full rounded object-center sm:flex-shrink-0"
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
                                            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default Team;