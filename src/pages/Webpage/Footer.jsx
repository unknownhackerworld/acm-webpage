import React from 'react';
import footerImg from '../../assets/footerimg.svg';

const Footer = () => {
  return (
    <div id='contact' className="relative">
      {/* Background Image */}
      <img src={footerImg} alt="" className="w-full object-cover" />

      {/* Overlay Content */}
      <div className="absolute inset-x-0 bottom-2 md:bottom-[68px] flex flex-col items-center text-white">
        <div className="w-full px-8 font-inter">
          {/* Text Section */}
          <div className="flex flex-col gap-1 justify-between items-center font-inter font-medium text-sm md:flex-row md:items-start md:gap-2">
            {/* Social Media Section */}
            <div className="flex flex-row justify-center items-center gap-4 font-inter text-[10px] font-medium md:order-3">
              <span>LINKEDIN</span>
              <span><a href="https://www.instagram.com/acm_sjce?igsh=MXZ0YmE0MnR3cDI4OA%3D%3D&utm_source=qr" target='_blank'>INSTAGRAM</a></span>
              <span>EMAIL</span>
            </div>

            {/* Credits Section */}
            <span className="font-medium text-[6px] md:text-[10px] md:order-1 md:text-left">
              WEBSITE CREDITS: DESIGNED BY <span className="font-bold"><a href='https://www.linkedin.com/in/tharun-c-6b7a89290' target='_blank' rel='noopener noreferrer'>THARUN C</a> (SECRETARY ACM)</span>, DEVELOPED BY <span className="font-bold"><a href='https://www.linkedin.com/in/adithya-suresh-3a93b825a' target='_blank' rel='noopener noreferrer'>ADITHYA M S</a></span>
            </span>

            {/* ACM Tag */}
            <span className="font-medium text-[10px] md:block hidden md:order-2">ACM - STUDENT CHAPTER</span>
          </div>

          {/* Thick Horizontal Line */}
          <div className="w-full h-[6px] md:h-6 bg-white rounded-sm md:rounded-md md:mt-4 md:order-4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
