import Logo from '../../../images/logo.jpeg';

const AboutUs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-5 max-w-screen-sm sm:text-center sm:mx-auto">
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
          About us
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4 text-justify">
        The Podar International School is very excited to announce the Podar Model United Nations E-Conference 2020! In the true spirit of our school, the annual student-led PMUN encourages our IBDP-1 and AS Levels students to be dynamic leaders and give them the opportunity to actively participate in debates as delegates, representing various countries. Our conference is an accurate academic simulation of the United Nations, which invites students to come together and respond to the most pressing global issues of the time. True to the spirit of the United Nations, PMUN strives to foster a constructive forum for open dialogue on a range of complex issues, including international peace and security, and economic and social progress. PMUN is an immersive and enriching online event that vitalizes critical thinking and teaches one the art of public speaking, debating, and leadership. During the conference, students will learn the importance of balancing national interests with the needs of the international community, while also learning about the powers and limitations of international negotiation.
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
  );

};

export default AboutUs