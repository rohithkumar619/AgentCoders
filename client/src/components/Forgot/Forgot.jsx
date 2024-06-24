import React, { useState } from "react";
import "./Forgot.css";
import axios from "axios";
import cross from "../../assets/GridiconsCrossCircle.png";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleOTP = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await axios.post("http://localhost:8000/send-otp", { email });
      if (res.status === 200) {
        setAlert(res.data.message);
        setIsSubmitting(false);
        navigate("/reset-password");
      } else {
        setIsSubmitting(false);
        setAlert("Failed to send OTP. Please try again.");
      }
    } catch (err) {
      console.log(err);
      setIsSubmitting(false);
      setAlert(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="forgot">
      <div className="forgot-div">
        <h1>FORGOT PASSWORD</h1>
        <label htmlFor="input">EMAIL ADDRESS</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        {alert && (
          <div className="alertmsg">
            <img src={cross} alt="" />
            {alert}
          </div>
        )}
        <button onClick={handleOTP} disabled={isSubmitting}>
          {isSubmitting ? "Sending OTP..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default Forgot;
