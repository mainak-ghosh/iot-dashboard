import React, { Component } from "react";
import { useState } from "react";

// This is a component for showing the stations in sidebar
const Stations = ({ station, subStationData }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("place in location Component", station);
  console.log("subStationData in location Component", subStationData);
  return (
    <>
      <div
        onClick={() => {
          // Changing the state of station selection.
          setIsOpen(!isOpen);
        }}
        className="flex flex-row justify-between p-1 rounded-sm transform transition duration-200 hover:bg-accent-light hover:text-black-textLt hover:scale-105 cursor-pointer"
      >
        <h1>{station}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      </div>
      {isOpen && (
        <div>
          {subStationData.map((data) => (
            <p
              key={data.deviceId}
              className="flex justify-between items-center pl-4 pt-2 pb-2 pr-2 rounded-sm transform transition duration-200 hover:bg-accent-light hover:text-black-textLt hover:scale-105 cursor-pointer"
              onClick={() => {
                console.log(`Clicked from ${data.subStationName}`);
              }}
            >
              {data.subStationName}
            </p>
          ))}
        </div>
      )}
      <hr></hr>
    </>
  );
};

// Sidebar component
const Sidebar = ({ stations }) => {
  console.log("station data in sidebar : ", stations);

  return (
    <div className="hidden lg:flex flex-col sticky inset-y-0 h-screen w-52 xl:w-58 bg-blue-antarticBlue dark:bg-black text-white-textLt shadow-inner font-semibold">
      <div className="flex flex-col p-4">
        <div className="flex-auto flex flex-row justify-between">
          <h1 className="text-xl font-semibold">John D.</h1>

          {/* Icon for User */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <input
          placeholder="Search locations"
          className="p-2 mt-8 mb-8 shadow-md bg-white rounded text-black-textLt text-semibold placeholder-black-textLt "
        ></input>

        <div className="flex flex-row justify-between ">
          <h1>Locations</h1>
          <p>158</p>
        </div>
        <hr></hr>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto p-4 text-sm">
        {stations.map((data) => (
          <Stations
            key={data.stationId}
            station={data.stationName}
            subStationData={data.subStations}
          />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
