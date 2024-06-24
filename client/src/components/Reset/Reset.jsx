import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Reset.css";
import cross from "../../assets/GridiconsCrossCircle.png";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [alert, setAlert] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!email || !otp || !newPassword || !confirmPassword) {
      setAlert("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setAlert("Passwords do not match.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:8000/reset-password", {
        email,
        otp,
        newPassword,
      });
      if (res.status === 200) {
        setAlert(res.data.message);
        navigate("/login");
      }
    } catch (err) {
      if (err.response) {
        setAlert(err.response.data.message);
      } else {
        setAlert("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="reset-password">
      <div className="reset-password-div">
        <h1>RESET PASSWORD</h1>
        <label htmlFor="emailInput">EMAIL ADDRESS</label>
        <input
          required
          type="email"
          id="emailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="otpInput">ENTER OTP</label>
        <input
          required
          type="text"
          id="otpInput"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
        <label htmlFor="newPasswordInput">NEW PASSWORD</label>
        <input
          required
          type="password"
          id="newPasswordInput"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label htmlFor="confirmPasswordInput">CONFIRM NEW PASSWORD</label>
        <input
          required
          type="password"
          id="confirmPasswordInput"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {alert && (
          <div className="alertmsg">
            <img src={cross} alt="" />
            {alert}
          </div>
        )}
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>
    </div>
  );
};

export default Reset;
