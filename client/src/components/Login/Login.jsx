import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import cross from "../../assets/GridiconsCrossCircle.png";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      if (res.data.status === "success") {
        if (res.data.role === "admin") {
          navigate("/", { state: { name: res.data.name } });
        } else {
          navigate("/", { state: { name: res.data.name } });
        }
      } else {
        setAlert(res.data.error);
      }
    } catch (err) {
      setAlert(err.response.data.error);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
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
        <button type="submit">Log In</button>
        <p>
          Don't have an account?{" "}
          <Link className="sign" to="/signup">
            SignUp
          </Link>
        </p>
        <Link to="/forgot" className="forgot-pass">
          Forgot Password?
        </Link>
        <Link to="/" className="forgot-pass">
          Skip
        </Link>
      </form>
    </div>
  );
};

export default Login;
