import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  ColumnSeries,
  DataLabel,
  Category,
} from "@syncfusion/ej2-react-charts";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";
const BarChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="bar-chart"
      height="620px"
      style={{ textAlign: "center" }}
      legendSettings={{ enableHighlight: true }}
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      tooltip={{ enable: true }}
      title="Olympic Medal Counts - RIO"
      background={currentMode === "dark" ? "#33373E" : "#fff"}
    >
      <Inject
        services={[
          DateTime,
          Legend,
          Tooltip,
          ColumnSeries,
          DataLabel,
          Category,
        ]}
      />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} columnSpacing={0.1} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default BarChart;
