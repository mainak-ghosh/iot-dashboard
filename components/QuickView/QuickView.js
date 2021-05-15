import React from "react";
import Link from "next/link";

const QuickViewItem = ({tagName, tagValue}) => {
  return (
    <div className="h-28 lg:h-20 w-44 md:w-48 lg:w-56 pt-2 pb-2 mt-1 mb-1 ml-2 mr-2 rounded-md bg-white text-dark-textLt shadow-xl cursor-pointer transfrom transition duration-200 hover:bg-blue-antarticBlue hover:text-white-textLt hover:scale-110 overflow-hidden">
      <h3 className="text-sm text-center align-middle font-medium p-1">
        {tagName}
      </h3>
      <hr className="bg-black"></hr>
      <h1 className=" text-2xl font-medium text-blue text-center align-middle">
        {tagValue}
      </h1>
    </div>
  );
};

const QuickView = () => {
  return (
    <div className="mt-1">
      <Link href="/alldatas">
        <div className="flex flex-row justify-between items-center hover:rounded cursor-pointer">
          <h1 className="pt-1 pb-1 text-lg font-semibold">Quick View</h1>
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
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </Link>
      <hr></hr>

      <div className="flex flex-wrap flex-row justify-start items-center mt-4 pt-2 pb-2">
        <QuickViewItem tagName="Water Supplied for the day" tagValue="45242 L"/>
        <QuickViewItem tagName="Chlorine" tagValue="0.58 Mg/L"/>
        <QuickViewItem tagName="Daily water supply" tagValue="4572 L"/>
        <QuickViewItem tagName="Number of Household" tagValue="145"/>
        <QuickViewItem tagName="Storage capacity" tagValue="6000 L"/>
        
      </div>
    </div>
  );
};

export default QuickView;
