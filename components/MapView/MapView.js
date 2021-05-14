import React from "react";
import Link from 'next/link'

const MapView = () => {
  return (
    <div className="rounded-md bg-grey text-dark-textLt shadow-lg overflow-hidden">
      <Link href="/map">
      <div className="pt-1 pb-1 pl-3 pr-3 flex flex-row justify-between items-center transition duration-200 hover:bg-blue-antarticBlue hover:text-white-textLt cursor-pointer">
        <h1 className="text-sm font-medium">Maps</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      </div>
      </Link>
      <hr></hr>
      <div>Hi I'm the element between maps</div>
    </div>
  );
};

export default MapView;
