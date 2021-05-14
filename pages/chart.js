import React from "react";
import { TitleBar } from "../components";
const chart = () => {
  return (
    <div className="h-screen pr-4 pl-4 overflow-y-auto">
      <div className="sticky top-0 bg-white pt-1 pb-1">
        <TitleBar pagetitle="Chart" />
      </div>

      <div className="overflow-y-auto">Hi chart</div>
    </div>
  );
};

export default chart;
