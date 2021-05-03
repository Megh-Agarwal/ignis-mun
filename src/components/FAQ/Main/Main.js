import React, { useState } from 'react';
import Item from '../Item/Item';

const Main = () => {

    const FAQs = [{
        "title": "Who can take part?",
        "answer": "Anyone below the age of 18 can take part, this Model United Nations is open to all age categories till the 12th Grade i.e., 18 years of age.",
    }, {
        "title": "How long is the MUN?",
        "answer": "It is a three-day MUN, and an approximate of 6-7 hours each day.",
    }, {
        "title": "What Rules of Procedure will the MUN follow?",
        "answer": "UNA-USA Rules of Procedure.",
    }, {
        "title": "What is a Night Crisis Committee?",
        "answer": "A Night Crisis Committee is a simulation which will take place at the end of the second day of the conference at 09:00 PM and will be chaired by the Secretary General, who will select the top 3 performers across all seven committees on the basis of their performance on Day 1 and Day 2. These 21 delegates will be given an agenda and a delegation 2 hours prior. The NCC will follow standard UNA-USA rules of procedure, the committee will be informed in case of any alteration in procedure.",
    }, {
        "title": "What platform is the conference using?",
        "answer": "The IGNISMUN E-Conference will be conducted online using Zoom to ensure that delegates have the best experience during the conference and can collaborate using it’s a multitude of tools and features embedded in the software.",
    }, {
        "title": "What material am I allowed to carry?",
        "answer": "You are allowed access to unlimited, pre-researched offline material in the duration of a moderated caucus. You can choose to either have hard copies of the same or as downloaded documents on your laptop or tablet. However, you are only allowed internet access for research during an unmoderated caucus. You may choose to carry a pen and a notebook for note-taking.",
    }, {
        "title": "Will I get a certificate?",
        "answer": "All delegates will receive participation certificates upon attendance on all three days of the conference. Additionally, there will be certificates awarded for Best Delegate, High Commendation, and Special Mention for each committee.",
    }, {
        "title": "Is there a delegate fee?",
        "answer": "There is a 400 Rupee delegate fee for IGNISMUN 2021.",
    }, {
        "title": "Are there any prizes for winners?",
        "answer": "The best delegate across all 7 committees will be rewarded with a 1,500 Rupee cash prize and a certificate.",
    }, {
        "title": "What is the difference between a moderated caucus and an unmoderated caucus?",
        "answer": "A Moderated Caucus is a debate format that allows delegates to make short comments on a specific sub-topic, while an Unmoderated Caucus (also called Informal Caucus or Lobbying Sessions) is a debate format in which delegates can leave their seats to go and talk to others freely and informally.",
    }, {
        "title": "Can I choose my committee/country?",
        "answer": "Your preferences for both countries and committees will be recorded. The board will consider your preferences, however, their decision on your delegation would be final.",
    }, {
        "title": "How can I prepare?",
        "answer": "Firstly, make sure to thoroughly research about your country and the committee’s agenda. There are multiple helpful resources to use for preparation on the Internet. You can also find the committee agendas and additional resources on this website. Furthermore, the board will be hosting a training session for all delegates.",
    }, {
        "title": "Are there going to be training sessions for the first-time delegates?",
        "answer": "Yes, there are two training sessions scheduled wherein, the Rules of Procedure along with some other details like how to research, how to write a speech, etc, will be explained thoroughly.",
    }, {
        "title": "Is there a dress code?",
        "answer": "The dress code for MUN Conferences is Western Formal. One will be expected to dress in suits (if male) or in equally formal clothing (if female). The minimum requirement at a conference is to wear a pair of formal pants, a shirt, and a blazer.",
    }, {
        "title": "Who will be monitoring the delegates?",
        "answer": "The Executive Board and the Secretariat will be monitoring and helping the delegates at all times. Each committee has a team consisting of the Chairpersons and two Vice-Chairpersons, who will also be monitoring the delegates.",
    }]

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
                                Get some of your questions cleared through the FAQs!
                            </p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        {FAQs.map(faq => {
                            return <Item title={faq.title}>
                                Answer: {faq.answer}
                            </Item>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
