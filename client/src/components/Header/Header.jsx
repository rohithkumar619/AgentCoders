import React, { useState, useEffect } from "react";
import "./Header.css";
import axios from "axios";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [name, setName] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/home", {
          withCredentials: true,
        });
        if (res.data.status === "success") {
          setName(res.data.name);
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    fetchData();
  }, [navigate, setName]);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/logout",
        {},
        { withCredentials: true }
      );
      setName("");
      navigate("/login");
    } catch (err) {
      console.error("Failed to log out", err);
    }
  };

  return (
    <div className={`Header ${isScrolled ? "scrolled" : ""}`}>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        <li onClick={() => navigate("/")}>HOME</li>
        <li>TOURNAMENT</li>
        <li onClick={() => navigate("/about")}>ABOUT</li>
      </ul>
      <div>
        {name ? (
          <div className="Udata">
            <span>{name}</span>
            <button onClick={handleLogout}>Log out</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
