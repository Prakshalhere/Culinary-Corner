import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_footer} alt="" />
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        {/* <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div> */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="tel:+1112223333">+1-111-222-3333</a>
            </li>
            <li>
              <a href="mailto:contact@CulinaryCorner.com">
                contact@CulinaryCorner.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="footer-talk-to-creator">
        <h2>Interested in Collaborating?</h2>
        <p>
          Let’s connect! Reach out to discuss potential opportunities or
          collaborations.
        </p>
        <a
          href="https://prakshaljain.github.io"
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </div>
      <p className="footer-copyright">
        Copyright 2024 © CulinaryCorner.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
