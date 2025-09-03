import React from 'react';
import EventChip from '../../components/EventChip';
import events from '../../data/events';

const CurrentEvents = () => {
  return (
    <><center>
      <div id="events" className='mb-10'><h1 className='font-bold text-4xl mb-5 text-[#15ade5] underline underline-offset-4'>Our Events</h1>
      {/* Header Section */}
      
        <span className="text-lg">
          Welcome to the ACM Chapter at SJCE! Though we're in our early stages, we're excited to host events that promote learning, collaboration, and growth...
        </span>
        </div>
      </center>
    <div  className="flex flex-col items-start px-6 lg:px-[61px] pb-10 w-full">
      <div className="pt-4 px-[18px] bg-[#F6F7F9] rounded-lg pb-4 max-w-full w-full">
        

        {/* Desktop Grid */}
        <div className="hidden lg:grid gap-4 grid-cols-3">
          {events.map((event, index) => (
            <EventChip
              key={index}
              eventName={event.eventName}
              eventDetail={event.eventDetail}
              eventThumbNail={event.eventThumbNail}
              status={event.status} />
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
                status={event.status} />
            </div>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default CurrentEvents;
