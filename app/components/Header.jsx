// components/Header.js
import React from "react";

const Header = () => {
  return (
    <>
      <div
        className="flex flex-wrap justify-start items-center p-4"
        style={{ borderBottom: "1px solid #e0e0e0" }}
      >
        <div className="flex items-center">
          <button className="mr-2">&lt;</button>
          <span className="font-semibold">November 2024</span>
        </div>
        <div className="flex space-x-4 lg:mt-0 mt-4 lg:ps-90">
          <button className="gray">Events</button>
          <button className="assign text-black font-normal rounded-xl px-4 py-2 bg-gray-100 font-normal">
            Team View
          </button>
          <button className="gray">Team Tracking</button>
        </div>
      </div>

      <div
        className="flex flex-wrap leftside-bar justify-between py-1 lg:ps-0 ps-10 lg:gap-0 gap-3"
        style={{
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <div className="flex space-x-4 ps-5">
          <button className="flex items-center">
            Status
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <button className="flex items-center">
            Team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap items-center space-x-4">
          <button className="flex items-center">
            1 hour
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <button className="flex items-center">
            Day
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <button className=" rounded-md px-4 py-2 flex items-center gap-1">
            <span
              style={{ backgroundColor: "#f4f4f5" }}
              className="h-8 w-8 p-3 rounded-s-lg"
            >
              {" "}
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.35194 8.56006C5.50216 8.4098 5.58655 8.20602 5.58655 7.99355C5.58655 7.78107 5.50216 7.5773 5.35194 7.42703L2.71327 4.78836L5.35194 2.1497C5.4979 1.99857 5.57867 1.79616 5.57684 1.58607C5.57502 1.37597 5.49075 1.17499 5.34218 1.02643C5.19361 0.87786 4.99264 0.793589 4.78254 0.791763C4.57244 0.789937 4.37003 0.870704 4.21891 1.01667L1.01372 4.22185C0.863505 4.37211 0.779116 4.57589 0.779116 4.78836C0.779116 5.00084 0.863505 5.20462 1.01372 5.35488L4.21891 8.56006C4.36917 8.71028 4.57295 8.79467 4.78542 8.79467C4.9979 8.79467 5.20167 8.71028 5.35194 8.56006Z"
                  fill="black"
                  stroke="#F4F4F5"
                  strokeWidth="0.5"
                />
              </svg>
            </span>
            <span style={{ backgroundColor: "#f4f4f5" }} className="px-2 py-1">
              {" "}
              Today{" "}
            </span>{" "}
            <span
              dir="rtl"
              style={{ backgroundColor: "#f4f4f5" }}
              className="h-8 w-8 p-3 rounded-s-lg"
            >
              {" "}
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.613454 8.56006C0.463234 8.4098 0.378845 8.20602 0.378845 7.99355C0.378845 7.78107 0.463234 7.5773 0.613454 7.42703L3.25212 4.78836L0.613454 2.1497C0.467491 1.99857 0.386725 1.79616 0.388551 1.58607C0.390376 1.37597 0.474648 1.17499 0.623215 1.02643C0.771781 0.87786 0.972757 0.793589 1.18285 0.791763C1.39295 0.789937 1.59536 0.870704 1.74649 1.01667L4.95167 4.22185C5.10189 4.37211 5.18628 4.57589 5.18628 4.78836C5.18628 5.00084 5.10189 5.20462 4.95167 5.35488L1.74649 8.56006C1.59622 8.71028 1.39244 8.79467 1.17997 8.79467C0.967495 8.79467 0.763719 8.71028 0.613454 8.56006Z"
                  fill="black"
                  stroke="#F4F4F5"
                  strokeWidth="0.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
