import { useState } from 'react';

import i0 from '../../../images/image0.jpeg';
import i1 from '../../../images/72DC7FA8-96AD-4139-860E-9BFD6145BC3C.jpeg';
import i2 from '../../../images/unnamed.jpeg';

function reduce(desc) {
  const descArr = desc.substr(0, 250).split(' ');
  descArr.pop();
  return descArr.join(' ') + '...';
}

export const Team = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Core Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Welcome</span>
          </span>{' '}
          our talented team
        </h2>
      </div>

      <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
        <div className="grid sm:grid-cols-3 lg:gap-40">
          <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto" style={{width: '200px',height:'200px',borderRadius:'50%'}}>
            <img
              className="absolute object-cover w-full h-full rounded-full"
              src={i0}
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold">Arooja bharadwaj</p>
            <p className="mb-4 text-xs text-gray-800">Director General</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
              {
                state1 ?
                <span>Director General for IGNIS MUN 2021, Arooja bharadwaj strongly believes that every opinion counts. She started her MUN journey back in 8th grade and has an experience of 7 MUNS tucked under her sleeve with a success rate of 100% and hopes to utilise her delegate and EB member experience to contribute and raise the bar for discussions.</span>
                : reduce("Director General for IGNIS MUN 2021, Arooja bharadwaj strongly believes that every opinion counts. She started her MUN journey back in 8th grade and has an experience of 7 MUNS tucked under her sleeve with a success rate of 100% and hopes to utilise her delegate and EB member experience to contribute and raise the bar for discussions.")
              }
              <button onClick={() => setState1(!state1)} className="text-blue-700 font-bold focus:outline-none hover:underline" >
                { state1 ? "Hide" : "Read more" }
              </button>
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 lg:gap-40">
          <div 
            className="relative w-full h-48 max-h-full rounded shadow sm:h-auto"
            style={{width: '200px',height:'200px',borderRadius:'50%'}}
          >
            <img
              className="absolute object-cover w-full h-full rounded-full"
              src={i1}
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold">Krish Gada</p>
            <p className="mb-4 text-xs text-gray-800">Director General</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
              {
                state2 ? 
                "Krish Gada, the Director General of Ignis MUN, is one of the most extroverted individuals you may came across, which makes his ability to help his peers and colleagues much easier. He started his MUNning journey in grade 7, and has attended over 15 MUNs, both nationally and internationally, both as a delegate as well as a part of the EB. For Krish, MUNs provide a platform to delegates to voice their opinions, without the fear of retribution."
                : reduce("Krish Gada, the Director General of Ignis MUN, is one of the most extroverted individuals you may came across, which makes his ability to help his peers and colleagues much easier. He started his MUNning journey in grade 7, and has attended over 15 MUNs, both nationally and internationally, both as a delegate as well as a part of the EB. For Krish, MUNs provide a platform to delegates to voice their opinions, without the fear of retribution.")
              }
              <button onClick={() => setState2(!state2)} className="text-blue-700 font-bold focus:outline-none hover:underline" >
                { state2 ? "Hide" : "Read more" }
              </button>
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 col-span-3 place-items-center">
          <div 
            className="relative w-full h-48 max-h-full rounded shadow sm:h-auto"
            style={{width: '200px',height:'200px',borderRadius:'50%'}}
          >
            <img
              className="absolute object-cover w-full h-full rounded-full"
              src={i2}
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold">Pratinav Deb</p>
            <p className="mb-4 text-xs text-gray-800">Secretary-General</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
              {
                state3 ? 
                "Pratinav Deb, the Secretary-General of IGNIS MUN 2021 believes strongly in voicing opinions on pressing matters, and is heavily invested in world affairs. Having done a total of 20+ MUNs, he intends to provide a platform for a fruitful exchange of ideas between various nations and delegates as he believes a Model United Nations conference is perfect for a group of delegates to showcase diplomacy and also have fun in the bargain."
                : reduce("Pratinav Deb, the Secretary-General of IGNIS MUN 2021 believes strongly in voicing opinions on pressing matters, and is heavily invested in world affairs. Having done a total of 20+ MUNs, he intends to provide a platform for a fruitful exchange of ideas between various nations and delegates as he believes a Model United Nations conference is perfect for a group of delegates to showcase diplomacy and also have fun in the bargain.")
              }
              <button onClick={() => setState3(!state3)} className="text-blue-700 font-bold focus:outline-none hover:underline" >
                { state3 ? "Hide" : "Read more" }
              </button>
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;