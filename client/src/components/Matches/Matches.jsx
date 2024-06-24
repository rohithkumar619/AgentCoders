import React from "react";
import "./Matches.css";
import back22 from "../../assets/back22.jpg";
import soldier from "../../assets/teams/soldier.png";
import rossgun from "../../assets/teams/rossgum.png";
import cleopsis from "../../assets/teams/cleopsis.png";
import devil from "../../assets/teams/devil.png";
import fierce from "../../assets/teams/fierce.png";
import guardian from "../../assets/teams/guardian.png";
import rover from "../../assets/teams/rover.png";
import skullking from "../../assets/teams/skullking.png";
import youtube from "../../assets/icons/youtube.png";
import discord from "../../assets/icons/discord.png";
import twitch from "../../assets/icons/twitch.png";
const Matches = () => {
  return (
    <div className="Matches">
      <img src={back22} alt="" />
      <div className="match">
        <div>
          <span>MATCHES</span>
          <span>MASTERS TOURNAMENT</span>
        </div>
        <span>VIEW ALL MATCHES</span>
      </div>
      <div className="matches">
        <div className="match-card">
          <div className="t1">
            <div>
              <img src={soldier} alt="" />
            </div>
            <div>
              <span>SOLDIER</span>
              <div>
                <span>Watch</span>
                <div>
                  <img src={youtube} alt="" />
                  <img src={discord} alt="" />
                  <img src={twitch} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="time">
            <span>
              13 <span>:</span> 18
            </span>
            <span>17 August 2024</span>
          </div>
          <div className="t1">
            <div>
              <img src={rossgun} alt="" />
            </div>
            <div>
              <span>ROSSGUM</span>
              <div>
                <span>Watch</span>
                <div>
                  <img className="icons" src={youtube} alt="" />
                  <img src={discord} alt="" />
                  <img src={twitch} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="match-card">
          <div className="t1">
            <div>
              <img src={rover} alt="" />
            </div>
            <div>
              <span>ROVER</span>
              <div>
                <span>Watch</span>
                <div>
                  <img className="icons" src={youtube} alt="" />
                  <img src={discord} alt="" />
                  <img src={twitch} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="time">
            <span>
              08 <span>:</span> 08
            </span>
            <span>22 SEPTEMBER 2024</span>
          </div>
          <div className="t1">
            <div>
              <img src={cleopsis} alt="" />
            </div>
            <div>
              <span>CLEOPSIS</span>
              <div>
                <span>Watch</span>
                <div>
                  <img className="icons" src={youtube} alt="" />
                  <img src={discord} alt="" />
                  <img src={twitch} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="match-card">
          <div className="t1">
            <div>
              <img src={skullking} alt="" />
            </div>
            <div>
              <span>SKULLKING</span>
              <div>
                <span>Watch</span>
                <div>
                  <img className="icons" src={youtube} alt="" />
                  <img src={discord} alt="" />
                  <img src={twitch} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="time">
            <span>
              10 <span>:</span> 12
            </span>
            <span>24 SEPTEMBER 2024</span>
          </div>
          <div className="t1">
            <div>
              <img src={guardian} alt="" />
            </div>
            <div>
              <span>GURRDIAN</span>
              <div>
                <span>Watch</span>
                <div>
                  <img className="icons" src={youtube} alt="" />
                  <img src={discord} alt="" />
                  <img src={twitch} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="match-card">
          <div className="t1">
            <div>
              <img src={fierce} alt="" />
            </div>
            <div>
              <span>FIERCE</span>
              <div>
                <span>Watch</span>
                <div>
                  <img className="icons" src={youtube} alt="" />
                  <img src={discord} alt="" />
                  <img src={twitch} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="time">
            <span>
              3 <span>:</span> 07
            </span>
            <span>25 December 2024</span>
          </div>
          <div className="t1">
            <div>
              <img src={devil} alt="" />
            </div>
            <div>
              <span>DEVIL</span>
              <div>
                <span>Watch</span>
                <div>
                  <img className="icons" src={youtube} alt="" />
                  <img src={discord} alt="" />
                  <img src={twitch} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
