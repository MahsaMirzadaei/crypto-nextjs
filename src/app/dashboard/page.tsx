import { Button } from "@mui/material";
import { onValue, ref } from "firebase/database";
import React, { useEffect } from "react";
import { db } from "../../../Firebase";

const Dashboard = () => {
  const getUser = () => {
    let data = fetch("https://jsonplaceholder.typicode.com/users");
    console.log(data);
    return <div>{JSON.stringify(data)}</div>;
  };
  return (
    <div>
      <h1> welcom Dashboard</h1>
      {getUser()}
    </div>
  );
};

export default Dashboard;
