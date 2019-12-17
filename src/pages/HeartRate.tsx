import React, { useEffect } from "react";
import * as d3 from "d3";
import { Line } from "@antv/g2plot";
import { LineGraph } from "../components";
import { Row, Typography } from "antd";

interface LineData {
  time: number;
  value: number;
}
const { Title } = Typography;

export default (props: any) => {
  return (
    <div>
      <Row type="flex" justify="center" style={{ marginTop: "15vh" }}>
        <Title level={2}>Heart Rate Graph</Title>
      </Row>
      <LineGraph type="heart-rate"></LineGraph>
    </div>
  );
};
