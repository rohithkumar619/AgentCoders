import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Signup.css";
import cross from "../../assets/GridiconsCrossCircle.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        password,
      });
      window.location.href = "/login";
    } catch (err) {
      setAlert(err.response.data.error);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
        <label htmlFor="input">FULL NAME</label>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          required
        />
        <label htmlFor="input">EMAIL ADDRESS</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          required
        />
        <label htmlFor="input">PASSWORD</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          required
        />
        {alert && (
          <div className="alertmsg">
            <img src={cross} alt="" />
            {alert}
          </div>
        )}
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?{" "}
          <Link className="sign" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
