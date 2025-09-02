import React from 'react';
import OurEventsImg from '../../assets/ourevents.jpeg';

const OurEvents = () => {
  return (
    <div id = "home" className="px-6 lg:px-[61px] pt-8 lg:pt-[64px] pb-8 lg:pb-[34px]">
      <div className="flex flex-col xl:flex-row px-4 lg:px-[18px] py-5 lg:py-[21px] bg-[#F6F7F9]">
        {/* Text Section */}
        <div className="font-inter flex flex-col justify-start lg:pr-8">
          <span className="font-bold text-lg lg:text-[22px] text-black pb-4 lg:pb-[14px]">
            ACM - St. Joseph's Student Chapter
          </span>
          <span className="font-inter text-sm lg:text-sm text-[#000000CC] pb-4 lg:pb-2 text-justify sm:text-left lg:text-center xl:text-left">
            Founded in 2024, the ACM chapter at St. Joseph's College of Engineering, handled and managed by the Department of Computer Science and Engineering, is dedicated to bridging the gap between students and the ever-evolving tech industry. Our mission is to foster a community where aspiring technologists can collaborate, innovate, and gain hands-on experience with the latest industry standards. Through workshops, hackathons, and networking opportunities, we empower students to develop the skills and connections needed to succeed in the world of computing.
          </span>
          <div className="flex justify-center lg:justify-center sm:justify-start mt-4 xl:justify-start">
            <button
              onClick={() => {
                const section = document.getElementById('events');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="font-bold text-sm text-white p-2 bg-[#09AAE1] w-auto"
            >
              Our Events
            </button>
          </div>
        </div>

        {/* Image Section */}
        <img
          src={OurEventsImg}
          alt="our events"
          className="mt-6 xl:mt-0 xl:ml-8"
          width={680}
        />
      </div>
    </div>
  );
};

export default OurEvents;
