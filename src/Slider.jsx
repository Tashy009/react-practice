import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import slider from "./sliderData";
function Slider() {
  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState(slider);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, people.length]);
  return (
    <section className="section">
      <div className="slider-title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="slider-section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article id="slider-article" className={position} key={id}>
              <img src={image} alt={name} className="slider-person-img" />
              <h4>{name}</h4>
              <p className="slider-title">{title}</p>
              <p className="slider-text">{quote}</p>
              <FaQuoteRight className="slider-icon" />
            </article>
          );
        })}
        <button className="slider-prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="slider-next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Slider;
