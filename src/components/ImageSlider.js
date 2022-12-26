import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slides } from "../utils/constants";

const ImageSlider = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Wrapper>
      <div className="section-center slider-section">
        <div className="slide-container ">
          <Slide>
            {slides.map((slideImage, index) => (
              <div className="each-slide each-slide-effect" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${slideImage.url})`,
                    backgroundPosition: "center",
                    height: "390px",
                    borderRadius: "20px",
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </Wrapper>
  );
};
// console.log(slides);
const Wrapper = styled.div`
  .slider-section {
    padding-top: 100px;
    display: block;
    overflow: hidden;
    justify-content: center;
  }

  .each-slide-effect > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 350px;
    border-radius: 20px;
    overflow: hidden;
    margin: auto;
    max-width: 100%;
  }

  .each-slide-effect {
    padding: 0px;
    font-size: 1.25rem;
    // background: #fff;
    text-align: center;
  }
  @media (min-width: 992px) {
    .slider-section {
    }
  }

  .prevArrow {
  }
`;

export default ImageSlider;
