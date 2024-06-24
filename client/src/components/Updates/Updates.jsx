import React from "react";
import "./Updates.css";
import back5 from "../../assets/back55.jpg";
const Updates = () => {
  return (
    <div className="Updates">
      <div>
        <img src={back5} alt="" />
      </div>
      <div className="updates">
        <span>GET UPDATES</span>
        <div>
          <input type="text" placeholder="ENTER YOUR EMAIL ADDRESS" />
          <button>SUBSCRIBE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Updates;
