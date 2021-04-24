import React from 'react';
import Signature from '../../../images/mylivesignature.png'

const SecGeneralAddress = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <a
          href="/"
          aria-label="View"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400"
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
        <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Secretary General’s address
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4 text-justify">
          <p className="mb-5 text-center">To all our Esteemed Delegates, Members, Teachers, and Friends,</p>
          Over the past decade, the world has been gripped by an increasing sense of uncertainty regarding where it is headed. The decade began amid a global financial crisis and subsequent international recession dating from the late 2000s. We have seen assertive nations like China attempting to expand its influence by militarizing the South China Sea. We have witnessed the oppression of cultural and religious minorities such as Muslims and people of color. We have witnessed the tension between Israelis and Palestinians that began in the mid-20th century. We have noticed the lack of women workers’ rights in South-East Asia and other multiple other regions. Moreover, we have witnessed the beginning of a the COVID-19 Pandemic which has ensued its own set of concerns: millions have been infected, countries have entered lockdowns, a record-breaking recession has been observed, and underprivileged children are being deprived of education, food, health, as well as safety.
          We believe that most of us have turned to Model United Nations Conferences as an avenue to express our frustrations at these global problems and share the hope that, perhaps, these obstacles are not as intractable as they seem. We, as global citizens, are fortunate enough to be able to voice our opinions on these social, economic, and political issues freely, and we must leverage our privilege to work for the betterment of mankind. Therefore, we are excited to launch the Podar Model United Nations E-Conference, which will allow delegates to interact with broader global communities through a memorable and pedagogical experience. We promise to uphold our vision of enabling healthy debate to promote academic rigor, integrity, and personal growth for everyone who is a part of our family. We are very excited to work with you in order to solve the aforementioned global issues by discussing, collaborating, and ideating.
          {/* Sincerely,
          <img src={Signature} className="ml-15 justify-items-center" /> */}
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
  );
};

export default SecGeneralAddress