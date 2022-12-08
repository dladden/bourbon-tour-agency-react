import React, { useState } from "react";
import styled from "styled-components";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  return (
    <div style={sliderStyle}>
      <div>❰</div>
      <div style={slideStyle}></div>
    </div>
  );
};

const Wrapper = styled.div``;

export default ImageSlider;
