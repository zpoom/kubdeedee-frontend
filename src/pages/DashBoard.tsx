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
  const [heartRateAvg, setHeartRateAvg] = useState<number>(0);
  const [soundAvg, setSoundAvg] = useState<number>(0);
  const [isWarning, setIsWarning] = useState<number>(0);
  const [img, setImg] = useState<string>("https://picsum.photos/600/400");
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
    db.on("value", snap => {
      if (snap.val().Yawn === undefined) setYawn(0);
      else setYawn(snap.val().Yawn);
      console.log(snap.val().Yawn);

      if (snap.val().avgHeartRate === undefined) setHeartRateAvg(0);
      else setHeartRateAvg(snap.val().avgHeartRate);
      console.log(snap.val().avgHeartRate);

      if (snap.val().avgSoundRate === undefined) setSoundAvg(0);
      else setSoundAvg(snap.val().avgSoundRate);
      console.log(snap.val().avgSoundRate);

      if (snap.val().url === undefined) setImg("https://picsum.photos/600/400");
      else setImg(snap.val().url);
      console.log(snap.val().url);
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
        <Col span={10} style={{ marginTop: "5vh" }}>
          <img
            src={img}
            style={{
              maxWidth: "100%",
              maxHeight: "100%"
            }}
          ></img>
        </Col>
        <Col span={6}>
          <TextStat headline="Yawn" value={yawn}></TextStat>
        </Col>
        <Col span={6}>
          <Link to="/sound">
            <TextStat headline="Sound" value={soundAvg}></TextStat>
          </Link>
        </Col>
        <Col span={6}>
          <Link to="/heart-rate">
            <TextStat headline="Heart Rate" value={heartRateAvg}></TextStat>
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
