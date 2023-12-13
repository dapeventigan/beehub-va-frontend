import React from "react";

import vaLogo from "../../../assets/navlogo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__space">
          <div className="footer__contents">
            <img src={vaLogo} alt="" className="footer__logo" />
            <div className="footer__links">
              <div className="links__content">
                <a href="#footer">Insert a Link</a>
                <a href="#footer">Insert a Link</a>
                <a href="mailto:dabeventigan@gmail.com">Technical Support</a>
                <a href="mailto:dabeventigan@gmail.com">Report a Bug</a>
              </div>

              <div className="links__content">
                <a href="https://dapeventigan.github.io/dape-portfolio/" target="_blank" rel="noopener noreferrer">Build me a Website</a>
                <a href="#footer">Insert a Link</a>
                <a href="#footer">Insert a Link</a>
              </div>
            </div>
            <div className="footer__socials">
              <a href="https://www.facebook.com/trashdape/" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="icon__living"/>
              </a>
              <a href="https://www.linkedin.com/in/dabe-ventigan-309a67288/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="icon__living" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
