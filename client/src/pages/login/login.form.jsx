import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, TextField, Typography, Button } from "@mui/material";
import { styleTextField, styleButton } from "./styles.login.page";
import AuthContext from "../../auth/authContext";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      const credentials = {
        username,
        password,
      };

      axios
        .post("http://localhost:5050/api/login/", credentials)
        .then((res) => {
          if (res.status == 200) {
            const { token, payload } = res.data;

            // store payload
            localStorage.setItem("token", token);

            login({ userInfo: payload });
            console.log("Payload", payload);

            navigate(`/dashboard/${payload.userId}`);
          }
        })
        .catch((err) => console.error(err));
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <Grid sx={{ m: 1 }}>
        <Typography
          variant="h3"
          role="subheading"
          aria-level="h3"
          sx={{ m: 0, fontSize: "20px" }}
        >
          Sign in
        </Typography>
      </Grid>
      <form>
        <TextField
          label="Username"
          aria-labelledby="loginForm"
          type="text"
          autoFocus
          autoComplete="current-username"
          InputLabelProps={{
            shrink: true,
          }}
          sx={styleTextField}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          aria-labelledby="loginForm"
          type="password"
          autoComplete="current-password"
          InputLabelProps={{
            shrink: true,
          }}
          sx={styleTextField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          aria-label="Login"
          role="button"
          type="submit"
          sx={styleButton}
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
