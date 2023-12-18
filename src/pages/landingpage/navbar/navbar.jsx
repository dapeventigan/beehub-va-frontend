import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
// import Axios from "axios";
import vaLogo from "../../../assets/navlogo.png";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { links } from "../../../assets/data";
// import Cookies from "js-cookie";

import "./navbar.css";

const NavbarHome = () => {
  // const [userDetails, setUserDetails] = useState(null);
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  // const [loginLocation, setLoginLocation] = useState("");
  // const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   Axios.get("https://dape-beehub-va-api.onrender.com/verifylogin").then((res) => {
  //     try {
  //       if (res.data !== "User not found") {
  //         setUserDetails(res.data);
  //         setIsUserLoggedIn(true);
  //         if (res.data.role === "admin") {
  //           setLoginLocation("/admindashboard");
  //         } else if (res.data.role === "applyUser") {
  //           setLoginLocation("/applyhome");
  //         } else if (res.data.role === "joinUser") {
  //           setLoginLocation("/joinhome");
  //         } else {
  //           Cookies.remove("token");
  //           window.location.reload();
  //           setLoginLocation("/");
  //         }
  //       } else {
  //         setIsUserLoggedIn(false);
  //         navigate("/");
  //       }
  //     } catch (error) {
  //       //TODO: Will add popup error that you've been logged out
  //       console.log(error);
  //       Cookies.remove("token");
  //       window.location.reload();
  //       setLoginLocation("/");
  //     }
  //   });
  // }, [navigate]);

  return (
    <nav>
      <div className="container navbar__container">
        <div className="navbar__contents">
          <div className="navbar__logo">
            <a href="/">
              <img src={vaLogo} alt="" />
            </a>
          </div>
          <div className="navbar__link">
            <ul className="navbar__links">
              <li>
                <Link to="/virtualassistant" className="link__details">
                  Virtual Assistant
                </Link>
              </li>
              <li>
                <a href="#" className="link__details">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="link__details">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="link__details">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="simple__menu">
            <Button
              sx={{
                color: "#fff",
                border: "2px solid #fff",
                "&:hover": {
                  border: "1px solid #ffd325",
                },
              }}
              variant="outlined"
              aria-controls="simple__menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              {anchorEl ? <MdOutlineClose /> : <FaBars />}
            </Button>
            <Menu
              id="simple__menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {links.map(({ name, path }, index) => {
                return (
                  <a key={index} href={path}>
                    <MenuItem className="link__details" onClick={handleClose}>
                      {name}
                    </MenuItem>
                  </a>
                );
              })}
            </Menu>
          </div>
          {/* <div className="button__login">
            {isUserLoggedIn ? (
              <Link to={loginLocation} className="button btn-login">
                Coming Soon
              </Link>
            ) : (
              <Link to="/login" className="button btn-login">
                Login
              </Link>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
