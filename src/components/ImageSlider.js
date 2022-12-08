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
  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)", //moving it to the half size of the element
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)", //moving it to the half size of the element
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };
  const dotsStyle = {
    margin: "0 3px",
    justifyContent: "center",
  };

  const goToPrevious = () => {
    //checking if we are on the first slide
    const isFirstSlide = currentIndex === 0;
    //newIndex slides the length -1 even if its on first slide
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    //checking if we are on the last slide
    const isLastSlide = currentIndex === slides.length - 1;
    //newIndex slides return to first slide 0 and if not go to slide +1
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={sliderStyle}>
      {/* using simple utf 8 symbols for arrows */}
      <div style={leftArrowStyle} onClick={goToPrevious}>
        ❰
      </div>
      <div style={rightArrowStyle} onClick={goToNext}>
        ❱
      </div>
      <div style={slideStyle}></div>
      <div>
        {slides.map((slide, slideIndex) => {
          <div key={slideIndex}>●</div>;
        })}
      </div>
    </div>
  );
};

const Wrapper = styled.div``;

export default ImageSlider;
