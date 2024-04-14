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
const Signup = () => {
  const [userData, setUserData] = useState({
    email: "",
    pass: "",
  });

  const handleSignup = async () => {
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
        Sign Up to Crypto
      </Typography>
      <Paper
        sx={{
          height: "fit-content",
          p: "2rem",
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
          <Typography mb={"1rem"} variant="body2">
            By clicking next, I hereby acknowledge that I agree to the terms of
            the Crypto.com Privacy Notice and Crypto.com Exchange Terms &
            conditions.
          </Typography>
          <Button variant="contained" onClick={() => handleSignup()}>
            Sign Up
          </Button>
        </FormControl>
        <Typography mt={"1.5rem"} variant="body2">
          Already have an account? <Link href="/login">Log In</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;
