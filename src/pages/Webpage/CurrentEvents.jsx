import React from 'react';
import EventChip from '../../components/EventChip';
import events from '../../data/events';

const CurrentEvents = () => {
  return (
    <div id="events" className="flex flex-col items-start px-6 lg:px-[61px] pb-10 w-full">
      <div className="pt-4 px-[18px] bg-[#F6F7F9] rounded-lg pb-4 max-w-full w-full">
        {/* Header Section */}
        <div className="font-inter flex flex-col justify-start items-start gap-4 pb-8">
          <span className="font-bold text-[22px] text-[#000000]">Our Events</span>
          <span className="font-normal text-sm text-[#000000CC] text-justify">
            Welcome to the ACM Chapter at SJCE! Though we're in our early stages, we're excited to host events that promote learning, collaboration, and growth...
          </span>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid gap-4 grid-cols-3">
          {events.map((event, index) => (
            <EventChip
              key={index}
              eventName={event.eventName}
              eventDetail={event.eventDetail}
              eventThumbNail={event.eventThumbNail}
              status={event.status}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden flex overflow-x-auto gap-4 pb-2 no-scrollbar snap-x snap-mandatory">
          {events.map((event, index) => (
            <div key={index} className="flex-shrink-0 w-72 snap-center">
              <EventChip
                eventName={event.eventName}
                eventDetail={event.eventDetail}
                eventThumbNail={event.eventThumbNail}
                status={event.status}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentEvents;
