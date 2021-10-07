import React from "react";
import heroImg1 from "./hero.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-center">
          <div className="hero-title">
            <h1>React Projects</h1>
            <p>
              Projects are the most practical way to learn any language, and
              <span> React </span> is no exception. This various user interface
              are created to practice some react methods
            </p>
          </div>
          <img src={heroImg1} alt="web development" className="hero-img" />
        </div>
      </section>
    </>
  );
};

export default Hero;
