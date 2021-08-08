import React, { useState, useEffect } from "react";
import sliderdata from "./sliderdata/sliderdata";
import "./Slider.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = sliderdata.length - 1;

  useEffect(() => {
    const lastIndex = length;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    }
    if (slideIndex > lastIndex) {
      setSlideIndex(0);
    }
  }, [slideIndex, length]);

  useEffect(() => {
    let timer = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [slideIndex]);
  return (
    <section className="slider">
      <button
        className="arrow left"
        onClick={() => setSlideIndex(slideIndex - 1)}
      >
        <FaArrowCircleLeft />
      </button>
      <button
        className="arrow right"
        onClick={() => setSlideIndex(slideIndex + 1)}
      >
        <FaArrowCircleRight />
      </button>
      {sliderdata.map((item, index) => {
        //Slide position
        let position = "nextslide";
        if (index === slideIndex) {
          position = "activeslide";
        }
        if (
          index === slideIndex - 1 ||
          (slideIndex === 0 && index === length)
        ) {
          position = "lastslide";
        }

        return (
          <article key={index} className={`${position}`}>
            <img src={item.image} alt="pets" className="image" />

            <h4 className="sliderarticle">
              <FaQuoteLeft /> {item.title}
              <FaQuoteRight />
            </h4>
          </article>
        );
      })}
    </section>
  );
};

export default Slider;
