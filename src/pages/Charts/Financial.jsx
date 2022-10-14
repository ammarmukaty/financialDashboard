import React from "react";
import { Header, FinancialChart } from "../../components";

const Financial = () => {
  return (
    <div className="m-2 p-2 mt-24 md:m-10 md:p-10 bg_white rounded-3xl dark:bg-gray-600">
      <Header category="Chart" title="Financial Hilo Chart" />
      <div className="w-full">
        <FinancialChart />
      </div>
    </div>
  );
};

export default Financial;
