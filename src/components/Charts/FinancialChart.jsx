import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Tooltip,
  HiloOpenCloseSeries,
  Zoom,
  Logarithmic,
  Crosshair,
  Category,
} from "@syncfusion/ej2-react-charts";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";
const FinancialChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="Financial-chart"
      height="620px"
      primaryXAxis={FinancialPrimaryXAxis}
      primaryYAxis={FinancialPrimaryYAxis}
      tooltip={{ enable: true }}
      legendSettings={{ visible: false }}
      crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
      chartArea={{ border: { width: 0 } }}
      background={currentMode === "dark" ? "#33373E" : "#fff"}
    >
      <Inject
        services={[
          HiloOpenCloseSeries,
          Category,
          Tooltip,
          DateTime,
          Zoom,
          Logarithmic,
          Crosshair,
        ]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          type="HiloOpenClose"
          dataSource={financialChartData}
          animation={{ enable: true }}
          bearFillColor="#2ecd71"
          bullFillColor="#e74c3d"
          xName="x"
          low="low"
          high="high"
          open="open"
          close="close"
          name="Apple Inc"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default FinancialChart;
