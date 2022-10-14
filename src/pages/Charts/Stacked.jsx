import React from "react";
import { Header, StackedChart } from "../../components";

const Stacked = () => {
  return (
    <div className="m-2 p-2 mt-24 md:m-10 md:p-10 bg_white rounded-3xl dark:bg-gray-600">
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;