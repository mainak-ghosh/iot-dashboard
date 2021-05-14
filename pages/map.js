import React from "react";
import { TitleBar } from "../components";

const map = () => {
  return (
    <div className="h-screen pr-4 pl-4 overflow-y-auto">
      <div className="sticky top-0 bg-white pt-1 pb-1">
        <TitleBar pagetitle="Map" />
      </div>

      <div className="overflow-y-auto">Hi map</div>
    </div>
  );
};

export default map;
