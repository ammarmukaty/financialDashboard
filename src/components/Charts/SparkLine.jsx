import React from "react";
import { SparklineAreaData } from "../../data/dummy";
import {
  SparklineTooltip,
  Inject,
  SparklineComponent,
} from "@syncfusion/ej2-react-charts";
class SparkLine extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const {
      currentColor = "red",
      id,
      height,
      width,
      data,
      color = "red",
      type,
    } = this.props;
    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        fill={color}
        valueType="Numeric"
        xName="x"
        yName="y"
        type={type}
        dataSource={data}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          format: "${x} : ${y}",
          fill: "green",
          textStyle: {
            color: "white",
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;
