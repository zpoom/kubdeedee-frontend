import React, { useState, useEffect } from "react";
import { TextStat } from "../components";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

interface Stat {
  img: string;
  yawn: number;
  warning: number;
  status: string;
  possibility: number;
  heartRate: number;
}
const USER_STAT: Stat = {
  img: "url",
  yawn: 20,
  warning: 3,
  status: "Nap",
  possibility: 0.5,
  heartRate: 70
};
export default (props: any) => {
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    setUser(USER_STAT);
  }, []);

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
          <TextStat
            headline="Status"
            value={user.status}
            color="red"
          ></TextStat>
        </Col>
        <Col span={6}>
          <TextStat
            headline="Possibility"
            value={user.possibility}
            color="green"
          ></TextStat>
        </Col>
        <Col span={6}>
          <TextStat
            headline="Heart Rate"
            value={user.heartRate}
            color="red"
          ></TextStat>
        </Col>
        <Col span={6}>
          <TextStat headline="#Yawn" value={user.yawn} color="red"></TextStat>
        </Col>
      </Row>
    </div>
  );
};
