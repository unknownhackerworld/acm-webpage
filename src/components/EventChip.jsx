import React from 'react';
import upcomingIcon from '../assets/upcomingIcon.svg';
import concludedIcon from '../assets/concludedIcon.svg';

const EventChip = ({ eventName, eventDetail, eventThumbNail, status = 'upcoming' }) => {
  const icon = status === 'concluded' ? concludedIcon : upcomingIcon;

  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-2 pb-3 pr-5 pl-2 border border-[#38383824] w-full sm:max-w-[550px] rounded-md bg-white">
      
      {/* Image */}
      <img
        src={eventThumbNail}
        alt="event thumbnail"
        className="w-full h-36 sm:w-40 sm:h-auto object-contain rounded-md mx-auto sm:mx-0"
      />

      {/* Text container */}
      <div className="font-inter flex-1 min-w-0 flex flex-col items-start">
        <span className="font-bold text-base text-[#000000] pb-2 break-words">
          {eventName}
        </span>
        <img
          src={icon}
          alt={`${status} icon`}
          className="pb-3"
        />
        <span className="font-normal text-[12px] text-justify text-[#000000] break-words leading-tight whitespace-normal">
          {eventDetail}
        </span>
      </div>
    </div>
  );
};

export default EventChip;
