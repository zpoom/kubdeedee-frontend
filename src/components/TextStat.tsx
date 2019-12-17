import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface StatInfo {
  headline: string;
  value: string | number;
}

export default ({ headline, value }: StatInfo) => {
  return (
    <div className="stat-box">
      <Title level={2}>{headline}</Title>
      <div style={{ color: "black", fontSize: "4vh" }}>{value}</div>
    </div>
  );
};
