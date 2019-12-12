import React, { useState, useEffect } from "react";

interface UserInfo {
  name: string;
  status: string;
}

export default ({ name, status }: UserInfo) => {
  return (
    <div className="card">
      <div style={{ paddingTop: "35%" }}>
        <h2 className="card-content">NAME : {name}</h2>
        <h2 className="card-content">STATUS : {status}</h2>
      </div>
    </div>
  );
};
