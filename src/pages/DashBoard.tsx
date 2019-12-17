import React, { useState, useEffect, useReducer } from "react";
import { TextStat } from "../components";
import { Row, Col, Typography, Switch, Button } from "antd";
import { Link } from "react-router-dom";
import { app } from "../const";
import HeartRate from "./HeartRate";

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

interface HeartRate {
  time: number;
  value: number;
}
export default (props: any) => {
  const [user, setUser] = useState<any>({});
  const [data, setData] = useState<any>([{}]);
  const [heartRate, setHeartRate] = useState<Array<HeartRate>>([]);
  const [heartRateAvg, setHeartRateAvg] = useState<number>(0);
  const [sumHeartRate, setSumHeartRate] = useState<number>(0);
  const [isWarning, setIsWarning] = useState<number>(0);
  const [buttonText, setButtonText] = useState<string>("ALERT");
  const [time, setTime] = useState<number>(1);
  const [yawn, setYawn] = useState<number>(0);
  let db = app.database().ref();
  // .limitToLast(1000);
  useEffect(() => {
    // setUser(USER_STAT);
    getData();
  }, []);
  const getData = () => {
    db.on("child_added", snap => {
      let heartRatePayload = {
        value: snap.val().HeartRateSensor,
        time: time
      };
      setTime(time + 10);
      data.push(heartRatePayload);
      console.log(data);
    });
    db.on("value", snap => {
      setYawn(snap.val().Yawn);
      console.log(snap.val().Yawn);
    });
  };

  const handleOnClick = () => {
    if (isWarning === 0) {
      setButtonText("STOP");
      setIsWarning(1);
    } else {
      setButtonText("ALERT");
      setIsWarning(0);
    }
    app
      .database()
      .ref()
      .update({ alert: isWarning });
  };
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
          <TextStat headline="Yawn" value={yawn}></TextStat>
        </Col>
        <Col span={6}>
          <Link to="/sound">
            <TextStat headline="Sound" value="test"></TextStat>
          </Link>
        </Col>
        <Col span={6}>
          <Link to="/heart-rate">
            <TextStat headline="Heart Rate" value="test"></TextStat>
          </Link>
        </Col>
        <Col span={6}>
          <Button
            type="danger"
            size="large"
            onClick={() => {
              handleOnClick();
            }}
          >
            {buttonText}
          </Button>
        </Col>
      </Row>
    </div>
  );
};
