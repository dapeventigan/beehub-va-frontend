import React, { useState, useEffect } from "react";
import Axios from "axios";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import "./header.css";
import HeaderLogo from "../../../assets/header_logo.json";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("https://dape-beehub-va-api.onrender.com/getCookieData", {
      withCredentials: true,
    }).then((res) => {
      console.log("Server response:", res.data);

      
      // if (res.data !== "User not found") {
      //   setIsUserLoggedIn(true);
      //   console.log("dasdasd yes 2");
      // } else {
      //   setIsUserLoggedIn(false);
      //   console.log("dasdasd naur");
      // }
    });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="title__container">
          <div className="title__contents">
            <h1>BeeHub</h1>

            <h2>Virtual Assistant Co.</h2>
            <h2 className="animate-charcter"> Service Beyond Borders</h2>
          </div>
          {isUserLoggedIn ? (
            <></>
          ) : (
            <div className="title__button">
              <Link to="/applyregister" className="btn btn-primary">
                Apply Now
              </Link>
              <Link to="/joinregister" className="btn btn-primary">
                Join Now
              </Link>
            </div>
          )}
        </div>

        <div className="header__logo">
          <Lottie animationData={HeaderLogo} className="animated__logo" />
        </div>

        <div className="title__button mobile">
          <Link to="/applyregister" className="btn btn-primary">
            Apply Now
          </Link>
          <Link to="/joinregister" className="btn btn-primary">
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
