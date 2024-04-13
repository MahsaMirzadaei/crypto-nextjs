"use client";
import { Button, FormControl, Paper, TextField } from "@mui/material";
import { auth } from "../../../Firebase";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    pass: "",
  });

  const handleLogin = async () => {
    createUserWithEmailAndPassword(auth, userData.email, userData.pass).then(
      (authUser) => {
        console.log(authUser);
      }
    );
  };

  return (
    <Paper sx={{ width: "fit-content", p: "2rem" }}>
      <h1>Sign Up</h1>
      <FormControl>
        <TextField
          required
          label="Email"
          sx={{ mb: "1rem" }}
          onChange={(e) =>
            setUserData((pre) => ({ ...pre, email: e.target.value }))
          }
        />
        <TextField
          required
          label="Password"
          type="password"
          onChange={(e) =>
            setUserData((pre) => ({ ...pre, pass: e.target.value }))
          }
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: "1rem" }}
          onClick={() => handleLogin()}
        >
          Submit
        </Button>
      </FormControl>
    </Paper>
  );
};

export default Login;
