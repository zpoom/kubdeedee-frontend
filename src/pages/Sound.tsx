import React from "react";
import { LineGraph } from "../components";
import { Typography, Row } from "antd";

const { Title } = Typography;

export default () => {
  return (
    <React.Fragment>
      <Row type="flex" justify="center" style={{ marginTop: "15vh" }}>
        <Title level={2}>Sound Graph</Title>
      </Row>
      <LineGraph type="sound"></LineGraph>
    </React.Fragment>
  );
};
