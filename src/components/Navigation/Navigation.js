import React, { useState } from 'react';
import Dropdown from '../UI/Dropdown';
import img from '../../images/logo.png';

import {
  Link
} from "react-router-dom";

const Nav = () => {
    const items = ["UNHRC", "SPECPOL", "UNODC", "ECOFIN"];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <div class="z-40 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="z-40 relative flex items-center justify-between">
          <a
            href="/"
            aria-label="IGNIS-MUN"
            title="IGNIS-MUN"
            className="inline-flex items-center"
          >
          <img width="150" src={img} alt="Logo" className="object-contain" height="200px" width="200px" />
          </a>
          <ul class="text-base font-serif flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link to="/" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Home</Link>
            </li>
            {/* <li>
              <Link to="/matrix" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Matrix</Link>
            </li>
            <li>
              <Link to="/schedule" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Schedule</Link>
            </li> */}
            <li>
              <Link to="/about-us" className="font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">About us</Link>
            </li>
            <li>
              <Dropdown title="Committees" className="font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600" items={items}/>
            </li>
            {/* <li>
              <Link to="/allocations" className="font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Allocations</Link>
            </li>
            <li>
              <Link to="/resources" className="font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Resources</Link>
            </li> */}
            <li>
              <Link to="/faq" className="font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">FAQ</Link>
            </li>
            <li>
              <Link to="/contact" className="font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Contact</Link>
            </li>
          </ul>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="https://forms.gle/q5p3uSeb1hR3PKQC8"
                class="inline-flex items-center justify-center h-12 px-6 font-serif tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-yellow-500 to-red-600"
                aria-label="Register"
                title="Register"
              >
                Register
              </a>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                    <a
                      href="/"
                      aria-label="IGNIS-MUN"
                      title="IGNIS-MUN"
                      className="inline-flex items-center"
                    >
                    <img width="150" src={img} alt="Logo" className="object-contain" height="200px" width="200px" />
                    </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="absolute top-5 right-5 p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <Link to="/" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Home</Link>
                      </li>
                      {/* <li>
                        <Link to="/matrix" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Matrix</Link>
                      </li> */}
                      {/* <li>
                        <Link to="/schedule" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Schedule</Link>
                      </li> */}
                      <li>
                        <Link to="/about-us" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">About us</Link>
                      </li>
                      <li>
                        <Dropdown title="Committees" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600" items={items}/>
                      </li>
                      {/* <li>
                        <Link to="/allocations" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Allocations</Link>
                      </li> */}
                      {/* <li>
                        <Link to="/resources" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Resources</Link>
                      </li> */}
                      <li>
                        <Link to="/faq" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/contact" className="font-serif font-medium text-lg tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Contact</Link>
                      </li>
                      <li>
                        <a
                          href="https://forms.gle/q5p3uSeb1hR3PKQC8"
                          class="inline-flex items-center w-full text-lg justify-center h-12 px-6 font-serif tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-yellow-500 to-red-600"
                          aria-label="Register"
                          title="Register"
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );

    // return (
    //   <div className="font-serif text-lg z-40 relative px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    //       <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
    //         <ul className="flex items-center hidden space-x-8 lg:flex">
    //           <li>
    //             <Link to="/about-us" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">About us</Link>
    //           </li>
    //           <li>
    //             <Link to="/core-team" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Core Team</Link>
    //           </li>
    //           <li>
    //             <Dropdown title="Committees" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600" items={items}/>
    //           </li>
    //           <li>
    //             <Link to="/allocations" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Allocations</Link>
    //           </li>
    //         </ul>
    //         <a
    //           href="/"
    //           aria-label="IGNIS-MUN"
    //           title="IGNIS-MUN"
    //           className="inline-flex items-center"
    //         >
    //         <img width="150" src={img} alt="Logo" className="object-contain" height="200px" width="200px" />
    //         </a>
    //         <ul className="flex items-center hidden space-x-8 lg:flex">
    //           <li>
    //             <Link to="/resources" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Resources</Link>
    //           </li>
    //           <li>
    //             <Link to="/faq" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">FAQ</Link>
    //           </li>
    //           <li>
    //             <Link to="/contact" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Contact</Link>
    //           </li>
    //           <li>
    //             <a href="https://forms.gle/q5p3uSeb1hR3PKQC8" target="_blank" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Register</a>
    //           </li>
    //         </ul>
    //         <div className="lg:hidden">
    //           <button
    //             aria-label="Open Menu"
    //             title="Open Menu"
    //             className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
    //             onClick={() => setIsMenuOpen(true)}
    //           >
    //             <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
    //               <path
    //                 fill="currentColor"
    //                 d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
    //               />
    //               <path
    //                 fill="currentColor"
    //                 d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
    //               />
    //               <path
    //                 fill="currentColor"
    //                 d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
    //               />
    //             </svg>
    //           </button>
    //           {isMenuOpen && (
    //             <div className="absolute top-0 left-0 w-full">
    //               <div className="p-5 bg-white border rounded shadow-sm">
    //                 <div className="flex items-center justify-between mb-4">
    //                   <div>
    //                     <a
    //                       href="/"
    //                       aria-label="Company"
    //                       title="Company"
    //                       className="inline-flex items-center"
    //                     >
    //                       <img src={img} className="h-24" />
    //                       {/* <svg
    //                         className="w-8 text-deep-purple-accent-400"
    //                         viewBox="0 0 24 24"
    //                         strokeLinejoin="round"
    //                         strokeWidth="2"
    //                         strokeLinecap="round"
    //                         strokeMiterlimit="10"
    //                         stroke="currentColor"
    //                         fill="none"
    //                       >
    //                         <rect x="3" y="1" width="7" height="12" />
    //                         <rect x="3" y="17" width="7" height="6" />
    //                         <rect x="14" y="1" width="7" height="6" />
    //                         <rect x="14" y="11" width="7" height="12" />
    //                       </svg> */}
    //                       {/* <span className="ml-2 text-lg font-bold tracking-wide text-gray-800 uppercase">
    //                         Ignis MUN
    //                       </span> */}
    //                     </a>
    //                   </div>
    //                   <div>
    //                     <button
    //                       aria-label="Close Menu"
    //                       title="Close Menu"
    //                       className="absolute top-5 right-5 p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    //                       onClick={() => setIsMenuOpen(false)}
    //                     >
    //                       <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
    //                         <path
    //                           fill="currentColor"
    //                           d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
    //                         />
    //                       </svg>
    //                     </button>
    //                   </div>
    //                 </div>
    //                 <nav>
    //                   <ul className="space-y-4">
    //                   <li>
    //                     <Link to="/about-us" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">About us</Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/core-team" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Core Team</Link>
    //                   </li>
    //                   <li>
    //                     <Dropdown title="Committees" customStyle={isMenuOpen && "left-110"} items={items}/>
    //                   </li>
    //                   <li>
    //                     <Link to="/allocations" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Allocations</Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/resources" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Resources</Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/faq" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">FAQ</Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/contact" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Contact</Link>
    //                   </li>
    //                   <li>
    //                     <a href="https://forms.gle/q5p3uSeb1hR3PKQC8" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-600">Register</a>
    //                   </li>
    //                   </ul>
    //                 </nav>
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    // );
};

export default Nav