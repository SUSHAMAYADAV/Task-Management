import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [tokens, setToken] = React.useState("");
  const navigate=useNavigate();
  const logoutHandlers = () => {
    if (window.confirm("are you want to logout ?")) {
      localStorage.removeItem("key");
    }
  };
  React.useEffect(() => {
    let token = localStorage.getItem("key");
    setToken(token);
  },[]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task
          </Typography>

          
           {!tokens && <Button color="inherit"> Login</Button>}
          {tokens && (
            <Button color="inherit" onClick={logoutHandlers}>
              Logout
            </Button>
          )} 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
