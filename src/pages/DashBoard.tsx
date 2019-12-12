import React from "react";
import { TextStat } from "../components";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;
export default (props: any) => {
  return (
    <div style={{ marginTop: "20vh" }}>
      <Title level={1} style={{ marginLeft: "5vw" }}>
        {props.match.params.name}
      </Title>
      <Row gutter={64} style={{ marginLeft: "5vw" }}>
        <Col span={10} className="video">
          LIVE VIDEO
        </Col>
        <Col span={6}>
          <TextStat headline="Status" value="Active" color="red"></TextStat>
        </Col>
        <Col span={6}>
          <TextStat
            headline="Possibility"
            value="100%"
            color="green"
          ></TextStat>
        </Col>
        <Col span={6}>
          <TextStat headline="Heart Rate" value="100" color="red"></TextStat>
        </Col>
        <Col span={6}>
          <TextStat
            headline="#Yawn"
            value="3 times/minute."
            color="red"
          ></TextStat>
        </Col>
      </Row>
    </div>
  );
};
