import React, { ReactNode, useState, useEffect } from "react";
import { Card } from "../components";
import { Link } from "react-router-dom";

export default () => {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    setName("Poom");
    setStatus("Active");
  }, []);

  return (
    <div className="home">
      <Link to={`/user/${name}`}>
        <Card name={name} status={status}></Card>
      </Link>
    </div>
  );
};
