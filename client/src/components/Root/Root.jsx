import React from "react";
import Hero from "../Hero/Hero";
import Matches from "../Matches/Matches";
import Login from "../Login/Login";
import "./Root.css";
import Team from "../Team/Team";
import Updates from "../Updates/Updates";
import Footer from "../Footer/Footer";
const Root = () => {
  return (
    <div className="root">
      <Hero />
      <Matches />
      <Team />
      <Updates />
      <Footer />
    </div>
  );
};

export default Root;
