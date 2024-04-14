"use client";
import {
  Box,
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { auth } from "../../../Firebase";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
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
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Typography variant="h4" fontWeight={"bold"}>
        Log in to Crypto
      </Typography>
      <Paper
        sx={{
          height: "fit-content",
          p: "2rem",
          py: "3rem",
          width: "30rem",
        }}
      >
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <TextField
            required
            label="Email Address"
            placeholder="Enter Your Email Address"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) =>
              setUserData((pre) => ({ ...pre, email: e.target.value }))
            }
          />
          <TextField
            required
            label="Password"
            placeholder="Enter Your Password"
            InputLabelProps={{
              shrink: true,
            }}
            type="password"
            onChange={(e) =>
              setUserData((pre) => ({ ...pre, pass: e.target.value }))
            }
          />
          <Button variant="contained" onClick={() => handleLogin()}>
            <Typography variant="button">Login</Typography>
          </Button>
        </FormControl>
        <Typography mt={"1.5rem"} variant="body2">
          Forgot your password?
        </Typography>
        <Typography mt={".5rem"} variant="body2">
          Don't have an account? <Link href="/signup">Sign up now</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
