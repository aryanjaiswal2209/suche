import React, { useState, useEffect, useRef } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import './styles.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [index, setIndex] = React.useState(0);
  const delay = 1500;
  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {};
  }, [index]);
  // index++;
  // if (index > length) {index = 1}
  // setTimeout(slides, 2000);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (     
            <div> 
          
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
                
              )}
            </div>
            <div
                className="header"
                key={index}
              >
                {index === current && (
                  <h1>{slide.heading}</h1>
                  
                )}
              </div>
              </div>
           
        );
      })}
    </section>
  );
};

export default ImageSlider;
