import * as React from "react";
import Box from "@mui/material/Box";
import logo from "../../assets/logo.svg";

export default function AppBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          width: "416px",
          height: "41px",
        }}
      />
    </Box>
  );
}
