import React from "react";
import Header from "../Header/Header";
import "./About.css";
import Footer from "../Footer/Footer";
import esports from "../../assets/esports.jpg";
import logo from "../../assets/logo.png";
const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="about-content">
        <h2>
          Welcome to Agent <span>Esports</span> Tournaments!
        </h2>
        <div className="about-esports">
          <img src={logo} alt="" />
          <div>
            <span>CONNECTING GAMERS & IGNITING PASSION</span>
            <span>
              The Agent Esports is a platform with the sole aim of powering
              esports experiences.
            </span>
          </div>
          <img src={esports} alt="" />
        </div>
        <p></p>

        <h3>What Sets Us Apart?</h3>
        <ul className="rules">
          <li>
            <strong>Verified Tournaments:</strong> Each tournament is carefully
            vetted to prevent scams and ensure legitimate competition.
          </li>
          <li>
            <strong>Transparent Results:</strong> Tournament outcomes are openly
            published, showcasing winners and standings with integrity.
          </li>
          <li>
            <strong>Community Engagement:</strong> Connect with fellow gamers,
            create your own tournaments, and participate in a thriving
            community.
          </li>
          <li>
            <strong>Advanced Features:</strong> Enjoy features like live
            streaming integration, real-time updates, and customizable
            tournament settings.
          </li>
        </ul>

        <h3>Join Agent Coders Today!</h3>
        <p>
          Experience the excitement of competitive gaming in a trustworthy
          environment. Whether you're looking to host a tournament, compete for
          glory, or simply enjoy the camaraderie of fellow gamers, Agent Coders
          Tournaments is your go-to platform.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
