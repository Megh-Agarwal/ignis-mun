import React, { useState, useRef, useEffect} from 'react';

import {
  Link
} from "react-router-dom";
const Header = () => {

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <a className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
              <svg
                className="w-10 h-10"
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
            <h2 className="antialiased sm:subpixel-antialiased md:antialiased max-w-lg mb-6 font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block text-5xl">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute z-60 top-0 left-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                <span className="relative">Ignis</span>
              </span>{' '}
              <span className="text-5xl">Model United Nations 2.0</span>
            </h2>
            <p className="text-2xl">
              17th Dec | 18th Dec | 19th Dec
            </p>
          </div>
          <div className="mb-8">
            <p className="text-gray-700 text-xl">Debate, Deliberate, Deliver</p>
          </div>
          <div className="mb-5">
            <a href="https://forms.gle/cda7HBadadRWsLaUA" className="font-serif inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-yellow-500 to-red-600">Register</a>
          </div>
          <div>
            <Link to="/about-us" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header