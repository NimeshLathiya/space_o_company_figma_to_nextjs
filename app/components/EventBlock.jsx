import React from "react";

const EventBlock = ({ event }) => {
  return (
    <div className="relative bottom-6 right-3">
      {/* First box */}
      <div
        className={`absolute top-1 left-1 rounded-md w-[130px] h-[41px] ${event.color} ps-2 p-1 text-xs space-y-1`}
      >
        <p className="font-semibold">{event.name}</p>
        <p>
          {event.start} - {event.end}
        </p>
      </div>

      {/* Second overlapping box (slightly shifted for the effect) */}
      <div className="absolute top-1 left-2 w-[127px] h-[41px] bg-white opacity-50 rounded-md border border-gray-300" />
    </div>
  );
};

export default EventBlock;
