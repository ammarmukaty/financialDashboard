import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  DateTime,
  AccumulationLegend,
  AccumulationTooltip,
  PieSeries,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";
const PieChart = ({ id, data, legendVisiblity, height ,name,pos}) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      height={height}
      id={id}
      legendSettings={{ visible: legendVisiblity, background: "white" }}
      enableSmartLabels={true}
      enableAnimation={false}
      center={{ x: "50%", y: "50%" }}
      enableBorderOnMouseMove={false}
      tooltip={{
        enable: true,
      }}
      style={{ textAlign: "center" }}
      background={currentMode === "dark" ? "#33373E" : "#fff"}
    >
      <Inject
        services={[
          DateTime,
          AccumulationLegend,
          AccumulationTooltip,
          PieSeries,
          AccumulationDataLabel,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name={name}
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: pos,
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
