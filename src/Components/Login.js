import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLoginDetails = {
    email: email,
    password: password,
  };

  const loginSubmitButton = () => {
   // console.log("the login detail", userLoginDetails);

    if (localStorage.getItem("key")) {
      let newKeye = JSON.parse(localStorage.getItem("key"));
      localStorage.setItem("key",JSON.stringify([...newKeye, userLoginDetails]));
    } else {
      localStorage.setItem("key", JSON.stringify([userLoginDetails]));
    }
  };

  const paperstyle = {
    padding: "30px 20px",
    width: 450,
    margin: "auto",
    position: "absolute", 
    top: "50%", 
    left: "50%", 
    transform: "translate(-50%, -50%)",
    backgroundColor: "#edf2f7",
  };
  return (
    <>
      {" "}
      <Grid>
        <Paper elevation={20} style={paperstyle}>
          <Grid align="center">
            <h2 style={{ margin: 0 }}>Login</h2>
            <Typography variant="caption" color={"red"}>
              Please fill this form to login an account!
            </Typography>
          </Grid>
          <form>
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="outlined"
            />

            <TextField
              sx={{ mt: 2 }}
              fullWidth
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              variant="outlined"
            />

            <Button
              sx={{ mt: 2 }}
              onClick={loginSubmitButton}
              fullWidth
              id="fullWidth"
              variant="contained"
            >
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
}
export default Login;
