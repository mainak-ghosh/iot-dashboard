import React from "react";

const QuickViewItem = () => {
  return (
    <div className="h-28 w-44 md:w-48 lg:w-56 pt-2 pb-2 mt-1 mb-1 ml-2 mr-2 rounded-md bg-grey text-dark-textLt shadow-lg cursor-pointer transfrom transition duration-200 hover:bg-blue-antarticBlue hover:text-white-textLt hover:scale-110">
      <h3 className="text-sm text-center align-middle font-medium p-1">Water Supplied for the day</h3>
      <hr className="bg-black"></hr>
      <h1 className=" text-2xl font-medium text-blue text-center align-middle">879652</h1>
    </div>
  );
};

const QuickView = () => {
  return (
    <div className="mt-2">
      <div className="flex flex-row justify-between items-center hover:rounded cursor-pointer">
        <h1 className="pt-2 pb-2 text-lg font-semibold">Quick View</h1>
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
      <hr></hr>

      <div className="flex flex-wrap flex-row justify-start items-center mt-4 pt-2 pb-2">
        <QuickViewItem />
        <QuickViewItem />
        <QuickViewItem />
        <QuickViewItem />
      </div>
    </div>
  );
};

export default QuickView;
