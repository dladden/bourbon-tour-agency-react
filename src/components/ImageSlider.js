import React, { useState } from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slides } from "../utils/constants";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Wrapper className="section-center ">
      <div>
        <div className="slide-container ">
          <Slide>
            {slides.map((slideImage, index) => (
              <div className="each-slide each-slide-effect" key={index}>
                <div
                  style={{ backgroundImage: `url(${slideImage.url})` }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </Wrapper>
  );
};
console.log(slides);
const Wrapper = styled.div`
  .each-slide-effect > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 350px;
    border-radius: 20px;
  }
  .each-slide-effect {
    padding: 20px;
    font-size: 20px;
    // background: #fff;
    text-align: center;
  }

  .prevArrow {
  }
`;

export default ImageSlider;
