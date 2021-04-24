import React, { useState } from 'react';
import Item from '../Item/Item';

const Main = () => {
    return (
        <div>
            <div class="font-serif px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div class="flex flex-col mb-16 sm:text-center">
                        <a href="/" class="mb-6 sm:mx-auto">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                                <svg
                                    class="w-10 h-10 text-deep-purple-accent-400"
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
                        <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                            <h2 class="max-w-lg mb-6 font-serif text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                <span class="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span class="relative">Frequently</span>
                                </span>{' '}
              asked questions
            </h2>
                            <p class="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <Item title="Who can take part?">
                            Answer: Since the Podar MUN E-Conference is an intraMUN, it will be open to all IBDP1 and AS Levels students of Podar International School, Santacruz.
                        </Item>
                        <Item title="What platform is the conference using?">
                            Answer: The Podar MUN E-Conference will be conducted online using Microsoft Teams to ensure that delegates have the best experience during the conference and can collaborate using it’s a multitude of tools and features embedded in the software.
                        </Item>
                        <Item title="Is the Space Pope reptilian!?">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </Item>
                        <Item title="How much money you got on you?">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </Item>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
