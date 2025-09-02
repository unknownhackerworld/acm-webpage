import React from 'react';
import facultySponsorImg from '../../assets/facultysponsor.svg';

const FacultySponsor = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 items-start px-6 lg:px-[61px] pb-12 lg:items-center xl:items-start">
      {/* Text Section */}
      <div className="font-inter flex flex-col justify-start gap-4 xl:order-2">
        <span className="font-bold text-lg lg:text-[22px] text-[#000000] lg:text-center xl:text-left">
          Our Faculty Sponsor
        </span>
        <span className="font-normal text-sm text-[#000000CC] text-justify sm:text-left lg:text-center xl:text-left">
          <span className="font-bold">Dr. B. Uma Maheswari</span> is a seasoned academic and researcher with over 22 years of teaching experience in the Department of Computer Science and Engineering at St. Joseph’s College of Engineering. Her research interests primarily focus on Machine Learning and Artificial Intelligence. She has been instrumental in mentoring students to excel in prestigious competitions such as the Smart India Hackathon.
        </span>
      </div>

      {/* Image Section */}
      <img
        src={facultySponsorImg}
        alt="Faculty Sponsor"
        className="w-full lg:w-auto mt-4 lg:mt-0 xl:order-1"
      />
    </div>
  );
};

export default FacultySponsor;
