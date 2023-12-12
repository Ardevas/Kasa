import React, { useState } from "react";
import Chevron from "../../assets/icons/chevron.svg";

export default function Carousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    // If we are on the last slide, go to the first slide
    setCurrentSlide((currentSlide + 1) % pictures.length);
  };

  const goToPrevSlide = () => {
    // If we are on the first slide, go to the last slide
    setCurrentSlide((currentSlide - 1 + pictures.length) % pictures.length);
  };

  // If there is only one picture, we don't need to render the arrows
  if (pictures.length <= 1) {
    return (
      <div className="carousel">
        <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
    );
  }

  return (
    <div className="carousel">
      <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <div className="carousel__arrows">
        <button onClick={goToPrevSlide} className="carousel__arrow">
          <img src={Chevron} alt="Previous" className="chevronLeft" />
        </button>
        <button onClick={goToNextSlide} className="carousel__arrow">
          <img src={Chevron} alt="Next" className="chevronRight" />
        </button>
      </div>
      <div className="carousel__counter">
        {currentSlide + 1}/{pictures.length}
      </div>
    </div>
  );
}
