import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ProtectedRoute(props) {
    console.log("------>Props---->", props)
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("keye");
    if (!token) {
      navigate("/");
    }
  });
  return (
    <Box>
      <Component />
    </Box>
  );
}