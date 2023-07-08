import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import player from "../../images/player2.png";
import sliderImg from "../../images/slider.jpg";
import sliderImg1 from "../../images/slider-1.jpg";
import sliderImg2 from "../../images/slider-2.jpg";

function ScreenSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Box
      sx={{
        textAlign: "center",
        "& img": { display: "inline-block !important" },
      }}
    >
      <Slider {...settings} className="swipeslider">
        <Box>
          <img
            src={player}
            alt="player"
            style={{ margin: "10px 0px", borderRadius: "8px" }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: "36px",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: "500",
              mt: 2,
              color: "#CE9200",
              lineHeight: "32px",
              mb: 1,
            }}
          >
            Welcome to Danimai Sprinter
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontSize: "16px",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: "200",
              lineHeight: "18px",
              color: "#97999B0",
            }}
          >
            Ready to start winning? Swipe to learn the basics of Danimai
            Sprinter
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <img src={sliderImg} alt="" />
        </Box>
        <Box sx={{ mt: 2 }}>
          <img src={sliderImg1} alt="" />
        </Box>
        <Box sx={{ mt: 2 }}>
          <img src={sliderImg2} alt="" />
        </Box>
      </Slider>
    </Box>
  );
}

export default ScreenSlider;
