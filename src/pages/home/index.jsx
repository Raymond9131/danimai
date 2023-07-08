import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import logo from "../../images/logo.svg";
import Background from "../../images/background_mesh.png";
import ScreenSlider from "../../components/slider";
import { SportList } from "./sportList";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <Box
      sx={{
        background: `#0C0517 url(${Background})`,

        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        py: 2,
      }}
    >
      <Box sx={{ textAlign: "center", px: 3 }}>
        <img alt="" src={logo} style={{ width: "150px" }} />
      </Box>

      <Container>
        <Box sx={{ mt: 3 }}>
          <Marquee pauseOnHover>
            {SportList.map((items, index) => (
              <Box sx={{ p: 1, mx: 0.5 }} className="spart-list" key={index}>
                <img alt="" src={items.imgUrl} />
              </Box>
            ))}
          </Marquee>
        </Box>
        <Box sx={{ color: "#fff", mb: 5 }}>
          <ScreenSlider />
        </Box>
        <Stack direction={"column"} spacing={2}>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                background:
                  "var(--linear, linear-gradient(225deg, #E49116 0%, #E6B816 100%))",
                color: "#FFF",
                fontSize: "16px",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              Trial Demo
            </Button>
          </Box>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                background:
                  "var(--linear, linear-gradient(225deg, #E49116 0%, #E6B816 100%))",
                color: "#FFF",
                fontSize: "16px",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              Resister
            </Button>
          </Box>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box sx={{ color: "#fff" }}>
              Invited by friend <br /> <strong>Enter code</strong>
            </Box>
            <Box sx={{ color: "#fff", textAlign: "right" }}>
              Already a user ? <br /> <strong>Log In</strong>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
