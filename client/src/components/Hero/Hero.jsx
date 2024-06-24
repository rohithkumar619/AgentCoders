import React from "react";
import Header from "../Header/Header";
import back1 from "../../assets/back11.jpg";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero">
      <Header />
      <div className="hero">
        <img src={back1} alt="" />
      </div>
      <div className="hero-caption">
        <div className="hero-left">
          <span>Welcome to Agent Coders</span>
          <span>
            Unleash Your Inner Champion Join the Ultimate Gaming Showdown!
          </span>
          <div>
            <button>Join Us</button>
            <button>About Us</button>
          </div>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
