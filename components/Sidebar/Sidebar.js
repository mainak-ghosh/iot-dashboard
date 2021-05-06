import React from "react";

const LocData = ({place}) => {
  return (
    <>
      <div className="flex flex-row justify-between p-1 hover:bg-accent-light ">
        <h1>{place}</h1>
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
      <hr></hr>
    </>
  );
};

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col sticky inset-y-0 left-0 h-screen w-80 bg-accent-lighter dark:bg-black text-black-textLt shadow-inner font-semibold">
      <div className="flex flex-col p-4">
        <div className="flex-auto flex flex-row justify-between">
          <h1 className="text-xl font-semibold">Mainak G.</h1>
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
          className="p-3 mt-8 mb-8 shadow-md bg-accent-light rounded text-black-textLt text-semibold placeholder-black-textLt "
        ></input>

        <div className="flex flex-row justify-between ">
          <h1>Locations</h1>
          <p>158</p>
        </div>
        <hr></hr>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto p-4">
        <LocData place="Kolkata"/>
        <LocData place="Durgapur"/>
        <LocData place="Asansol"/>
        <LocData place="Raniganj"/>
        <LocData place="Howrah"/>
        <LocData place="Bolpur"/>
        <LocData place="Darjeeling"/>
        <LocData place="Mumbai"/>
        <LocData place="Burdwan"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        <LocData place="Durgapur"/>
        
        
      </div>
    </div>
  );
};

export default Sidebar;
