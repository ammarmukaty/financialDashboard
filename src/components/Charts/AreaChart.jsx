import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  AreaSeries,
  DataLabel,
  Category,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";
const AreaChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="area-chart"
      height="620px"
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
      background={currentMode === "dark" ? "#33373E" : "#fff"}
    >
      <Inject
        services={[DateTime, Legend, Tooltip, AreaSeries, DataLabel, Category]}
      />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default AreaChart;
