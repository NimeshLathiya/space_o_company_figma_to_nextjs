import React from 'react';

const AssignmentItem = ({ assignment }) => {
  return (
    <div className="p-2 px-4">
      <div className="flex justify-between items-start">
        <div className='space-y-2'>
          <p className="font-semibold">{assignment.name}</p>
          <p className="text-sm gray">
            {assignment.address}
            <br />
            Allentown, New Mexico 31134
          </p>
        </div>
        <div className="flex items-start flex-col space-y-3">
          <p className="mr-4 text-sm gray">{assignment.job}</p>
          <button className="assign text-black font-normal mt-1 rounded-full px-4 py-1 text-sm">Assign</button>
        </div>
      </div>
      <hr className="mt-4 border-gray-200" />
    </div>
  );
};

export default AssignmentItem;