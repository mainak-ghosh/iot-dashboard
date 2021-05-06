import React from "react";

const QuickViewItem = () => {
  return (
    <div className="h-auto w-auto m-4 rounded bg-accent text-white-textLt shadow-lg p-4">
      <h3>Total Production</h3>
      <h1 className="text-2xl text-center text">879652</h1>
    </div>
  );
};

const QuickView = () => {
  return (
    <div>
      <h1 className="mb-4">Quick View</h1>
      <div className="flex flex-wrap flex-row justify-start">
        <QuickViewItem />
        <QuickViewItem />
        <QuickViewItem />
        <QuickViewItem />
        <QuickViewItem />
      </div>
    </div>
  );
};

export default QuickView;
