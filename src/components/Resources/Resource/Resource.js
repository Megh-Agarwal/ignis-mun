import {
  Link
} from "react-router-dom";

const Resource = () => {
    return (
        <div className="font-serif bg-gray-100">
          <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
              <svg
                viewBox="0 0 88 88"
                className="w-full max-w-screen-xl text-indigo-100"
              >
                <circle fill="orange" cx="44" cy="44" r="15.5" />
                <circle
                  fillOpacity="0.2"
                  fill="orange"
                  cx="44"
                  cy="44"
                  r="44"
                />
                <circle
                  fillOpacity="0.2"
                  fill="orange"
                  cx="44"
                  cy="44"
                  r="37.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="orange"
                  cx="44"
                  cy="44"
                  r="29.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="orange"
                  cx="44"
                  cy="44"
                  r="22.5"
                />
              </svg>
            </div>
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                    <svg
                      className="w-8 h-8 white"
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
                  <p className="mb-2 font-bold">Rules of procedure</p>
                  <p className="text-sm leading-5 text-gray-900">
                    <a href="https://ignismun.s3.ap-south-1.amazonaws.com/IGNIS+MODEL+UNITED+NATIONS+RULES+OF+PROCEDURE.pdf" target="_blank">Click here to download the rules of procedure.</a>
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-yellow-500 to-red-600 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
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
                  <p className="mb-2 font-bold">ALL INDIA POLITICAL PARTIES MEET</p>
                  <p className="text-sm leading-5 text-gray-900">
                    <a href="https://ignismun.s3.ap-south-1.amazonaws.com/STUDY+GUIDES/ALL+INDIA+POLITICAL+PARTIES+MEET.pdf" target="_blank">Click here to download the study guide.</a>
                    <br></br>
                    <Link to={`/committee/AIPPM`}>
                      Click here for more information.
                    </Link>
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-yellow-500 to-red-600 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
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
                  <p className="mb-2 font-bold">CONTINUOUS CRISIS COMMITTEE</p>
                  <p className="text-sm leading-5 text-gray-900">
                    <a href="https://ignismun.s3.ap-south-1.amazonaws.com/STUDY+GUIDES/CONTINUOUS+CRISIS+COMMITTEE.pdf" target="_blank">Click here to download the study guide.</a>
                    <br></br>
                    <Link to={`/committee/CCC`}>
                      Click here for more information.
                    </Link>
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-yellow-500 to-red-600 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
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
                  <p className="mb-2 font-bold">DISARMAMENT AND INTERNATIONAL SECURITY COMMITTEE</p>
                  <p className="text-sm leading-5 text-gray-900">
                    <a href="https://ignismun.s3.ap-south-1.amazonaws.com/STUDY+GUIDES/DISARMAMENT+AND+INTERNATIONAL+SECURITY+COMMITTEE.pdf" target="_blank">Click here to download the study guide.</a>
                    <br></br>
                    <Link to={`/committee/DISEC`}>
                      Click here for more information.
                    </Link>
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-yellow-500 to-red-600 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
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
                  <p className="mb-2 font-bold">ECONOMIC AND FINANCIAL AFFAIRS COUNCIL</p>
                  <p className="text-sm leading-5 text-gray-900">
                    <a href="https://ignismun.s3.ap-south-1.amazonaws.com/STUDY+GUIDES/ECONOMIC+AND+FINANCIAL+AFFAIRS+COUNCIL.pdf" target="_blank">Click here to download the study guide.</a>
                    <br></br>
                    <Link to={`/committee/ECOFIN`}>
                      Click here for more information.
                    </Link> 
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-yellow-500 to-red-600 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
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
                  <p className="mb-2 font-bold">SOCIAL HUMANITARIAN AND CULTURAL COMMITTEE</p>
                  <p className="text-sm leading-5 text-gray-900">
                    <a href="https://ignismun.s3.ap-south-1.amazonaws.com/STUDY+GUIDES/SOCIAL+HUMANITARIAN+AND+CULTURAL+COMMITTEE.pdf" target="_blank">Click here to download the study guide.</a>
                    <br></br>
                    <Link to={`/committee/SOCHUM`}>
                      Click here for more information.
                    </Link>
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-yellow-500 to-red-600 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
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
                  <p className="mb-2 font-bold">UNITED NATIONS OFFICE ON DRUGS AND CRIME</p>
                  <p className="text-sm leading-5 text-gray-900">
                    <a href="https://ignismun.s3.ap-south-1.amazonaws.com/STUDY+GUIDES/UNITED+NATIONS+OFFICE+ON+DRUGS+AND+CRIME.pdf" target="_blank">Click here to download the study guide.</a>
                    <br></br>
                    <Link to={`/committee/UNODC`}>
                      Click here for more information.
                    </Link>
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-yellow-500 to-red-600 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
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
                  <p className="mb-2 font-bold">UNITED NATIONS WOMEN</p>
                  <p className="text-sm leading-5 text-gray-900">
                    <a href="https://ignismun.s3.ap-south-1.amazonaws.com/STUDY+GUIDES/UNITED+NATIONS+WOMEN.pdf" target="_blank">Click here to download the study guide.</a>
                    <br></br>
                    <Link to={`/committee/UNW`}>
                      Click here for more information.
                    </Link>
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-yellow-500 to-red-600 group-hover:scale-x-100" />
              </div>
            </div>
          </div>
        </div>
    );
};

export default Resource