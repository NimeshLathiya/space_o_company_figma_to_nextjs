// components/Sidebar.js
import React from "react";
import AssignmentItem from "./AssignmentItem";

const Sidebar = () => {
  const assignments = [
    {
      name: "Cameron Williamson",
      address: "4140 Parker Rd.",
      job: "JOB106731",
    },
    {
      name: "Cameron Williamson",
      address: "4140 Parker Rd.",
      job: "JOB106731",
    },
    {
      name: "Cameron Williamson",
      address: "4140 Parker Rd.",
      job: "JOB106731",
    },
    {
      name: "Cameron Williamson",
      address: "4140 Parker Rd.",
      job: "JOB106731",
    },
    {
      name: "Cameron Williamson",
      address: "4140 Parker Rd.",
      job: "JOB106731",
    },
  ];

  return (
    <>
      <div className="w-100  relative bottom-13 lg:mt-0 mt-20">
        <div className="">
          <div
            className="flex justify-center flex-wrap space-x-4"
            style={{ borderBottom: "1px solid #e0e0e0", paddingBottom : "6px" }}
          >
            <button className="gray">Assigned</button>
            <button className="assign text-black font-normal mt-1 rounded-xl px-4 py-2">
              Unassigned
            </button>
          </div>
        </div>
        <div className="px-2">
          <button
            className="sm:w-full mt-2  flex gap-2 assign-btn justify-center items-center font-medium text-[16px] bg-[#fafafa] rounded-lg text-black p-2 rounded mb-4 py-1"
            style={{ border: "1px solid #EEEFF1", color: "#232529" }}
          >
            Assign All
            <span className="text-sm">
              <svg
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_0_334"
                  // style="mask-type:alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="14"
                  height="14"
                >
                  <rect
                    x="0.478516"
                    y="0.691406"
                    width="13.043"
                    height="13.043"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_0_334)">
                  <path
                    d="M7.37037 2.40427C7.42687 2.22991 7.67355 2.22991 7.73004 2.40427L8.953 6.1789C8.97088 6.23408 9.0131 6.278 9.06754 6.29803L12.6437 7.61418C12.8087 7.6749 12.8087 7.90826 12.6437 7.96898L9.06754 9.28513C9.0131 9.30516 8.97088 9.34908 8.953 9.40427L7.73004 13.1789C7.67355 13.3533 7.42687 13.3533 7.37037 13.1789L6.14741 9.40427C6.12953 9.34908 6.08731 9.30516 6.03287 9.28513L2.45675 7.96898C2.29176 7.90826 2.29176 7.6749 2.45675 7.61418L6.03287 6.29803C6.08731 6.278 6.12953 6.23408 6.14741 6.1789L7.37037 2.40427Z"
                    fill="url(#paint0_linear_0_334)"
                  />
                  <path
                    d="M3.16412 1.06143C3.20178 0.945195 3.36623 0.945195 3.4039 1.06143L3.88366 2.54221C3.89558 2.579 3.92373 2.60828 3.96002 2.62164L5.3724 3.14144C5.4824 3.18193 5.4824 3.3375 5.3724 3.37798L3.96002 3.89779C3.92373 3.91115 3.89558 3.94042 3.88366 3.97721L3.4039 5.45799C3.36623 5.57423 3.20178 5.57423 3.16412 5.45799L2.68436 3.97721C2.67244 3.94042 2.64429 3.91115 2.60799 3.89779L1.19561 3.37798C1.08562 3.3375 1.08562 3.18193 1.19561 3.14144L2.60799 2.62164C2.64429 2.60828 2.67244 2.579 2.68436 2.54221L3.16412 1.06143Z"
                    fill="url(#paint1_linear_0_334)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_0_334"
                    x1="7.55021"
                    y1="1.84923"
                    x2="7.55021"
                    y2="13.7339"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3CFFB9" />
                    <stop offset="1" stopColor="#3E51FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_334"
                    x1="3.28401"
                    y1="0.691406"
                    x2="3.28401"
                    y2="5.82802"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3CFFB9" />
                    <stop offset="1" stopColor="#3E51FF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </button>
        </div>

        {assignments.map((assignment, index) => (
          <AssignmentItem key={index} assignment={assignment} />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
