// components/Grid.js
import React from 'react';
import GridCell from './GridCell';
import EventBlock from './EventBlock';

const Grid = () => {
  const timeSlots = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'];
  const teamMembers = [
    'Member 1', 'Member 2', 'Member 3', 'Member 4', 'Member 5',
    'Member 6', 'Member 7', 'Member 8', 'Member 9', 'Member 10', 'Member 11'
  ];

  const events = {
    'Member 2': {
      '9am': { start: '10:20 am', end: '10:45 am', name: 'Client Name', color: 'bg-blue-200' },
      '6am': { start: '8:00 am', end: '8:30 am', name: 'Client Name', color: 'bg-blue-200' },
    },
    'Member 5': {
      '8am': { start: '9:30 am', end: '10:00 am', name: 'Client Name', color: 'bg-purple-200' },
    },
    'Member 8': {
      '9am': { start: '11:30 am', end: '12:00 pm', name: 'Client Name', color: 'bg-yellow-200' },
      '11am': { start: '1:15 pm ', end: '2:00 am', name: 'Client Name', color: 'bg-yellow-200' },
    },
    'Member 11': {
      '7am': { start: '12:30 pm', end: '1:00 pm', name: 'Client Name', color: 'bg-blue-200' },
    },
  };

  const memberColors = [
    '#F5A623', '#9AE095', '#74EBE1', '#9EE1FF', '#A0C6FF',
    '#A0FFB5', '#FFA0F9', '#FFE1A0', '#FFA0A0', '#C0A0FF', '#FFFFA0'
  ];

  return (
    <div className="flex-grow overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th colSpan={1} className="p-2 border">Team</th>
            {timeSlots.map((time) => (
              <th  key={time} colSpan={2} className="p-2 border font-normal" style={{ color: 'gray' , backgroundColor : "#fafafa"}}>{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member, index) => (
            <tr key={index}>
              <td colSpan={1} className="p-2 border align-top">
                <div className="flex items-center p-1">
                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: memberColors[index] }}></span>

                  <span>{member}</span>
                </div>
              </td>
              {timeSlots.map((time, timeIndex) => (
                  <>
                  <GridCell key={`${timeIndex}-1`}>
                    {events[member] && events[member][time] && <EventBlock event={events[member][time]} />}
                  </GridCell>
                  <GridCell key={`${timeIndex}-2`} />
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;