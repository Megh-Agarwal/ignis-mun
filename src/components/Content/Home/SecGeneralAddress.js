import React from 'react';
import SecGenPhoto from '../../../images/Pratinav Deb 3.jpg'

const SecGeneralAddress = () => {

  // return (
  //   <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  //     <div className="grid gap-10 lg:grid-cols-2">
  //       <div className="lg:pr-10">
  //         <a
  //           href="/"
  //           aria-label="Go Home"
  //           title="Logo"
  //           className="inline-block mb-5"
  //         >
  //           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-red-600">
  //             <svg
  //               className="w-10 h-10 text-deep-purple-accent-400"
  //               stroke="white"
  //               viewBox="0 0 52 52"
  //             >
  //               <polygon
  //                 strokeWidth="3"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 fill="none"
  //                 points="29 13 14 29 25 29 23 39 38 23 27 23"
  //               />
  //             </svg>
  //           </div>
  //         </a>
  //         <h5 className="mb-4 text-4xl font-extrabold leading-none">
  //           Secretary General’s address
  //         </h5>
  //         <p className="text-justify mb-6 text-gray-900">
  //         "We are not only all responsible for each other’s security. We are
  //          also, in some measure, responsible for each other’s welfare."
  //          -Kofi Annan <br /><br />


  //          On behalf of our Secretariat, I am truly honoured to welcome
  //          you to the very first iteration of the IGNIS Model United Nations
  //          E-Conference.

  //          <br /><br />

  //          We are looking to kickstart the very first edition of this Model
  //          United Nations E-Conference with extreme exhilaration and joy.
  //          The Secretariat and the Executive Board at IGNIS have a
  //          combined experience of 250+ MUNs and promise to bring
  //          nothing but the best to the table and are excited to welcome
  //          back old friends and greet many new ones. 
  //          I’m Pratinav Deb, for me personally, the conference is an
  //          extraordinary honour and I look forward to serving you this year
  //          as Secretary General. I assure you, my team, as always, is
  //          comprised of experienced students who are willing to go out of
  //          their way to ensure that every attendee at this year’s conference
  //          is comfortable and confident. Our Organising Committee and
  //          the extended Organising committee consisting of the Logistics
  //          and Public Relations team are in place, and together our
  //          services are available to the fullest extent for each delegate for
  //          we at IGNIS believe that we are responsible for others’ welfare.
  //          I will be conducting training sessions along with my substance
  //          team to help first timers discover a better version of themselves
  //          and get acquainted to the different MUN aspects which include
  //          the Rules of Procedure and research. Please avail yourselves of
  //          our knowledgeable and helpful team. It is my hope that we can
  //          help you in any way to prepare for this conference.
  //          As always, I am happy to field any of your questions, comments
  //          or concerns and feel free to reach out to me.
  //          <br /><br />
  //          Thanks, and Best Wishes to all the delegates,
  //          <br />
  //          Pratinav Deb
  //          <br />
  //          Secretary General, IGNIS MUN 2021
  //         </p>
  //         <hr className="mb-5 border-gray-300" />
  //         <div className="flex items-center space-x-4">
  //           <a
  //             href="/"
  //             className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
  //           >
  //             <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
  //               <circle cx="15" cy="15" r="4" />
  //               <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
  //             </svg>
  //           </a>
  //         </div>
  //       </div>
  //       <div className="items-center">
  //         <img
  //           className="object-cover w-full rounded shadow-lg"
  //           src={SecGenPhoto}
  //           alt=""
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );

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
        <img
            className="object-cover w-full rounded shadow-lg mb-3"
            src={SecGenPhoto}
            alt=""
          />
        <p className="text-base text-gray-700 md:text-lg sm:px-4 text-justify">
          <p className="mb-5 text-center">Dear Delegates,</p>

          “We are not only all responsible for each other’s security. We are
          also, in some measure, responsible for each other’s welfare.”
          -Kofi Annan <br /><br />


          On behalf of our Secretariat, I am truly honoured to welcome
          you to the very first iteration of the IGNIS Model United Nations
          E-Conference.

          <br /><br />

          We are looking to kickstart the very first edition of this Model
          United Nations E-Conference with extreme exhilaration and joy.
          The Secretariat and the Executive Board at IGNIS have a
          combined experience of 250+ MUNs and promise to bring
          nothing but the best to the table and are excited to welcome
          back old friends and greet many new ones. 
          I’m Pratinav Deb, for me personally, the conference is an
          extraordinary honour and I look forward to serving you this year
          as Secretary General. I assure you, my team, as always, is
          comprised of experienced students who are willing to go out of
          their way to ensure that every attendee at this year’s conference
          is comfortable and confident. Our Organising Committee and
          the extended Organising committee consisting of the Logistics
          and Public Relations team are in place, and together our
          services are available to the fullest extent for each delegate for
          we at IGNIS believe that we are responsible for others’ welfare.
          I will be conducting training sessions along with my substance
          team to help first timers discover a better version of themselves
          and get acquainted to the different MUN aspects which include
          the Rules of Procedure and research. Please avail yourselves of
          our knowledgeable and helpful team. It is my hope that we can
          help you in any way to prepare for this conference.
          As always, I am happy to field any of your questions, comments
          or concerns and feel free to reach out to me.
          <br /><br />
          Thanks, and Best Wishes to all the delegates,
          <br />
          Pratinav Deb
          Secretary General, IGNIS MUN 2021
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
  );
};

export default SecGeneralAddress