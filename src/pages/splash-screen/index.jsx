import { Box } from "@mui/material";
import React from "react";
import Background from "../../images/background_mesh.png";
import logo from "../../images/logo.svg";
import player from "../../images/player.png";

function SplashScreen() {
  return (
    <Box
      sx={{
        background: `#0C0517 url(${Background})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ textAlign: "center", p: 3 }}>
        <img alt="" src={logo} />
      </Box>
      <Box sx={{ pt: 1 }}>
        <img src={player} alt="" />
      </Box>
    </Box>
  );
}

export default SplashScreen;
