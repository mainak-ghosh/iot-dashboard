import React from "react";
import { TitleBar } from "../components";

const alldatas = () => {
  return (
    <div className="h-screen pr-4 pl-4 overflow-y-auto">
      <div className="sticky top-0 bg-white pt-1 pb-1">
        <TitleBar pagetitle="Datas" />
      </div>

      <div className="overflow-y-auto">All datas are here</div>
    </div>
  );
};

export default alldatas;
