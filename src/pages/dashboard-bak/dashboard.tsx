import { Col, Flex, Row, Typography } from "antd";
import React, { forwardRef, useEffect, useRef } from "react";
import { userProjectData } from "src/apis/projects";
import { Chart } from '@antv/g2';
import { Pie } from "@antv/g2plot";
import styled from "styled-components";

export interface UserProjectData {
  projID: number;
  dueDate: string;
  projStatus: string;
  productType: string;
}

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const PieChart = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const pieChart = new Pie(container.current, {
      data: data,
      width: 400,
      height: 200,
      angleField: "sold",
      colorField: "genre",
      color: ["#62828F", "#BACBC9", "#E0CAC5", "#E0E6E9"],
      // padding: [40, 40, 40, 40]
    });

    pieChart.render();

    return () => pieChart.destroy();
  }, [data]);

  return <ChartWrapper><div ref={container} /></ChartWrapper>;
};

export const Dashboard = () => {

  return (
    <div className="dashoboard-section">
      <PieChart/>
    </div>
  )
}

const ChartWrapper = styled.div`
  width: 400px;
  height: 200px;
`