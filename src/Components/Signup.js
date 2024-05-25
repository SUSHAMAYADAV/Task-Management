import { useState } from "react";
import { json } from "react-router";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignupDetails = {
    fullname: fullName,
    phonenumber: phoneNumber,
    email: email,
    Password: password,
  };

  const signupButton = () => {
    console.log(userSignupDetails);

    if (
      fullName !== "" &&
      phoneNumber !== "" &&
      email !== "" &&
      password !== ""
    ) {
      if (localStorage.getItem("key")) {
        let newKeyee = JSON.parse(localStorage.getItem("key"));
        localStorage.setItem(
          "key",
          JSON.stringify([...newKeyee, userSignupDetails])
        );
      } else {
        localStorage.setItem("key", JSON.stringify([userSignupDetails]));
      }
    } else {
      alert("plz fill the required field");
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
    <Grid>
      <Paper elevation={20} style={paperstyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1bbd7e" }}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={{ margin: 0 }}>Sign-Up</h2>
          <Typography variant="caption" color={"red"}>
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <form>
          <TextField
            sx={{ mt: 2 }}
            type="text"
            fullWidth
            label="Name"
            onChange={(e) => setFullName(e.target.value)}
            variant="outlined"
          />
          <TextField
            sx={{ mt: 2 }}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            label="Email"
            variant="outlined"
          />

          <TextField
            sx={{ mt: 2 }}
            type="number"
            fullWidth
            label="Phone Number"
            variant="outlined"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            sx={{ mt: 2 }}
            type="password"
            fullWidth
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="outlined" fullWidth type="submit" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
export default Signup;
