import React from "react";
import { Header, PieChart } from "../../components";
import { pieChartData } from "../../data/dummy";

const Pie = () => {
  return (
    <div className="m-2 p-2 mt-24 md:m-10 md:p-10 bg_white rounded-3xl dark:bg-gray-600">
      <Header category="Chart" title="jobs occupations in Australia" />
      <div className="w-full">
        <PieChart
          id="pie-chart"
          data={pieChartData}
          legendVisiblity={true}
          height="720px"
          name="occupation"
          pos="Inside"
        />
      </div>
    </div>
  );
};

export default Pie;
