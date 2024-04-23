import React, { forwardRef, useEffect, useRef } from "react";
import { Pie } from "@antv/g2plot";
import { UserProjectData } from "./dashboard";
import styled from "styled-components";

interface Props {
  data: UserProjectData[];
}

interface ProductTypeFrequency {
  productType: string;
  freq: number;
}

const countTypes = (data: UserProjectData[]) => {
  const frequencyMap = data.reduce<Record<string, number>>((acc, item) => {
    acc[item.productType] = (acc[item.productType] || 0) + 1;
    return acc;
  }, {});

  const frequencyArray: ProductTypeFrequency[] = Object.keys(frequencyMap).map(
    (key) => ({
      productType: key,
      freq: frequencyMap[key],
    })
  );

  return frequencyArray;
};

const PieChart = ({ data }: Props) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const frequency = countTypes(data);

    const pieChart = new Pie(container.current, {
      data: frequency,
      angleField: "freq",
      colorField: "productType",
      color: ["#62828F", "#BACBC9", "#E0CAC5", "#E0E6E9"],
      padding: [40, 40, 40, 40]
    });

    pieChart.render();

    return () => pieChart.destroy();
  }, [data]);

  return <ChartWrapper className="chart-wrapper" ref={container} />;
};

export default PieChart;


const ChartWrapper = styled.div`
  width: 200px;
  height: 100px;
`