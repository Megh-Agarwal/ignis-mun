import React, { useState, useRef, useEffect} from 'react';

import {
  Link
} from "react-router-dom";
const Content = () => {
    return (
        <div className="font-serif px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid gap-4 grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto mb-10">
            <a className="mb-4 mr-8">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                <svg
                  className="w-12 h-12"
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
            <div>
              <p className="font-serif mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
                28th May, 2021
              </p>
              <h2 className="font-serif mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Day 1
              </h2>
              <p className="font-serif text-sm text-gray-700">
                3:30 PM - 4:30 PM | Opening Ceremony <br></br>
                4:30 PM - 6:30 PM | Committee session 1 <br></br>
              </p>
            </div>
          </div>
                <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
                    <a className="mb-4 mr-8">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                        <svg
                        className="w-12 h-12"
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
                    <div>
                    <p className="font-serif mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
                        29th May, 2021
                    </p>
                    <h2 className="font-serif mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Day 2
                    </h2>
                    <p className="font-serif text-sm text-gray-700">
                        9:30 AM - 11:30 AM | Committee session 2 <br></br>
                        11:30 AM - 12:00 PM | Break <br></br>
                        12:00 PM - 2:00 PM | Committee session 3 <br></br>
                        2:00 PM - 3:00 PM | Lunch Break <br></br>
                        3:00 PM - 4:30 PM | Committee session 4 <br></br>
                        9:00 PM - 1:00 AM | NIGHT CRISIS COMMITTEE<br></br>
                    </p>
                    </div>
                </div>
                <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto mb-10">
            <a className="mb-4 mr-8">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                <svg
                  className="w-12 h-12"
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
            <div>
              <p className="font-serif mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
                30th May, 2021
              </p>
              <h2 className="font-serif mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Day 3
              </h2>
              <p className="font-serif text-sm text-gray-700">
                    9:30 AM - 11:30 AM | Committee session 5 <br></br>
                    11:30 AM - 12:00 PM | Break <br></br>
                    12:00 PM - 2:00 PM | Committee session 6 <br></br>
                    2:00 PM - 3:00 PM | Lunch Break <br></br>
                    3:00 PM onwards | Closing ceremony <br></br>
              </p>
            </div>
          </div>
            </div>
        </div>
    );
};
export default Content