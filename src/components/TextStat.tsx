import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface StatInfo {
  headline: string;
  value: string;
  color: string;
}

export default ({ headline, value, color }: StatInfo) => {
  return (
    <div className="stat-box" style={{ background: `color` }}>
      <Title level={2}>{headline}</Title>
      <div>{value}</div>
    </div>
  );
};
