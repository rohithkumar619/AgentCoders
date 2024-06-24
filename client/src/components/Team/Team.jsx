import React from "react";
import "./Team.css";
import m1 from "../../assets/teams/member1.jpg";
import m2 from "../../assets/teams/member2.jpg";
import m3 from "../../assets/teams/member3.jpg";
import facebook from "../../assets/icons/facebook.png";
import twitch from "../../assets/icons/twitch.png";
import youtube from "../../assets/icons/youtube.png";
const Team = () => {
  return (
    <div className="Team">
      <div className="team-caption">
        <div>
          <span>TEAM</span>
          <span>OUR EXPERTS</span>
        </div>
        <span>MEET OUR TEAM</span>
      </div>
      <div className="team">
        <div className="experts">
          <div>
            <img src={m1} alt="" />
          </div>
          <div>
            <div>
              <span>ROBERT FOX</span>
              <span>TEAM CAPTAIN</span>
            </div>
            <div className="icons2">
              <img className="icons22" src={youtube} alt="" />
              <img src={facebook} alt="" />
              <img src={twitch} alt="" />
            </div>
          </div>
        </div>
        <div className="experts">
          <div>
            <img src={m2} alt="" />
          </div>
          <div>
            <div>
              <span>ESTHER HOWARD</span>
              <span>SUPPPORT PLAYER</span>
            </div>
            <div className="icons2">
              <img src={youtube} alt="" />
              <img src={facebook} alt="" />
              <img src={twitch} alt="" />
            </div>
          </div>
        </div>
        <div className="experts">
          <div>
            <img src={m3} alt="" />
          </div>
          <div>
            <div>
              <span>JACOB JONES</span>
              <span>STREAMER</span>
            </div>
            <div className="icons2">
              <img src={youtube} alt="" />
              <img src={facebook} alt="" />
              <img src={twitch} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
