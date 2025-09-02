import React from 'react';
import facultyAdvisorImg from '../../assets/facultyadvisor.svg';

const FacultyAdvisor = () => {
  return (
    <div id='about' className="flex flex-col xl:flex-row gap-6 items-start px-6 lg:px-[61px] pb-12 lg:items-center xl:items-start">
      <div className="font-inter flex flex-col justify-start gap-4">
        <span className="font-bold text-lg lg:text-[22px] text-[#000000] lg:text-center xl:text-left">
          Our Faculty Advisor
        </span>
        <span className="font-normal text-sm text-[#000000CC] text-justify lg:text-center xl:text-left sm:text-left">
          <span className="font-bold">Dr. V. Muthulakshmi</span>, HOD Department of Computer Science and Engineering has been a part of St. Joseph’s College of Engineering for 30 years, with a focus on Computer Science and Engineering. She holds a PhD in Computer Science from Anna University. With extensive experience in Artificial Intelligence , Machine Learning and Distributed Systems, she brings a wealth of knowledge to our ACM chapter.
        </span>
      </div>
      <img
        src={facultyAdvisorImg}
        alt="Faculty Advisor"
        className="order-1 lg:order-2 w-full lg:w-auto mt-4 lg:mt-0"
      />
    </div>
  );
};

export default FacultyAdvisor;
