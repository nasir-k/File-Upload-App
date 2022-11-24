import React, { useContext, useState } from "react";

import { Grid, Paper, TextField, Button } from "@mui/material";
import UserContext from "../../context/UserContext/UserContext";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const paperStyle = {
    padding: 20,
    width: 280,
    margin: "20px auto",
  };

  const userContext = useContext(UserContext);

  const handleSignInClick = () => {
    userContext.login({
      username: userName,
      password,
    });
  };

  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          onChange={(event) => setUserName(event.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          sx={{ mt: 2 }}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleSignInClick}
        >
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
