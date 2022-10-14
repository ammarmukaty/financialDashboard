import React from "react";
import { Header, BarChart } from "../../components";

const Bar = () => {
  return (
    <div className="m-2 p-2 mt-24 md:m-10 md:p-10 bg_white rounded-3xl dark:bg-gray-600">
      <Header
        category="Chart"
        title="Medals won by countries in 2009 olympics"
      />
      <div className="w-full">
        <BarChart />
      </div>
    </div>
  );
};

export default Bar;
