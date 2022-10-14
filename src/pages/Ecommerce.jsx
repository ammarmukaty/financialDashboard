import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import {
  StackedChart,
  PieChart,
  Button,
  SparkLine,
  LineChart,
} from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
  recentTransactions,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 rounded-xl w-full h-44 lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400 capitalize">earning</p>
              <p className="text-2xl ">$44,666</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              size="md"
              color="white"
              bgColor={currentColor}
              text="download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-1 items-center m-3">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white p-4 pt-9 rounded-2xl dark:bg-secondary-dark-bg dark:text-gray-200 md:w-90 sm:w-60 xs:w-56 lg:80  "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ml-2 text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 ml-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-items-center justify-center gap-10">
        <div className="m-3 p-4 rounded-2xl bg-white dark:text-gray dark:bg-secondary-dark-bg md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expenses</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify mt-10 gap-10">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,000</span>
                  <span className="p-1.5 rounded-full ml-3 text-white bg-green-400 hover:drop-shadow-xl cursor-pointer text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$56,000</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div>
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  height="80px"
                  width="250px"
                  type="Line"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <StackedChart width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">
                  $63,448.78
                </p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                data={SparklineAreaData}
                type="Column"
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <PieChart
                id="pie-chart"
                data={ecomPieChartData}
                legendVisiblity={false}
                height="160px"
                name="Sale"
                pos="Inside"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-items-center justify-center gap-10 m-4 ">
        <div className="m-3 p-4 rounded-2xl bg-white dark:text-gray dark:bg-secondary-dark-bg w-400   ">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <Button
              size="10px"
              color="white"
              bgColor={currentColor}
              text="dropDown"
              borderRadius="10px"
            />
          </div>
          <div className="pt-3">
            {recentTransactions.map((item, index) => (
              <div
                className="flex justify-between items-center mt-4 "
                key={index}
              >
                <div className="flex">
                  <button
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl hover:bg-light-gray"
                    style={{
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                    }}
                  >
                    {item.icon}
                  </button>
                  <div className="ml-4 ">
                    <p className="font-semibold text-md">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t-1 justify-between flex items-center py-3">
            <Button
              size="10px"
              color="white"
              bgColor={currentColor}
              text="Add"
              borderRadius="10px"
            ></Button>
            <p className="text-sm text-gray-400">36 Recent Transactions</p>
          </div>
        </div>
        <div className="m-3 p-4 rounded-2xl bg-white dark:text-gray dark:bg-secondary-dark-bg w-760   ">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Sales Overview</p>
            <Button
              size="10px"
              color="white"
              bgColor={currentColor}
              text="dropDown"
              borderRadius="10px"
            />
          </div>
          <div className="mt-10">
            <LineChart  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
