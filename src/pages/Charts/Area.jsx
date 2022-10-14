import React from "react";
import { Header, AreaChart } from "../../components";

const Area = () => {
  return (
    <div className="m-2 p-2 mt-24 md:m-10 md:p-10 bg_white rounded-3xl dark:bg-gray-600">
      <Header category="Chart" title="Increase of Inflation Rate" />
      <div className="w-full">
        <AreaChart />
      </div>
    </div>
  );
};

export default Area;
