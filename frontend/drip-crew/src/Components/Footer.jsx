// Footer.jsx
import React from "react";

import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import googlePlay from "../assets/google_play.png"; // Update with the actual path to your image
import appStore from "../assets/apple_store.png"; // Update with the actual path to your image
import originalIcon from "../assets/original.png"; // Update with the actual path to your image
import returnIcon from "../assets/Return.png"; // Update with the actual path to your image

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-column">
        <h3>ONLINE SHOPPING</h3>
        <ul>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Home & Living</a>
          </li>
          <li>
            <a href="#">Beauty</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Myntra Insider</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>CUSTOMER POLICIES</h3>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">T&C</a>
          </li>
          <li>
            <a href="#">Terms Of Use</a>
          </li>
          <li>
            <a href="#">Track Orders</a>
          </li>
          <li>
            <a href="#">Shipping</a>
          </li>
          <li>
            <a href="#">Cancellation</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Grievance Officer</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>USEFUL LINKS</h3>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Whitehat</a>
          </li>
          <li>
            <a href="#">Cleartrip</a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <h5>
          EXPERIENCE MYNTRA APP <br /> ON MOBILE
        </h5>
        <div>
          <img src={googlePlay} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>
        <h5>KEEP IN TOUCH</h5>
        <div className="footer-social">
          <a href="#">
            <FaFacebook size={24} />
          </a>
          <a href="#">
            <FaTwitter size={24} />
          </a>
          <a href="#">
            <FaYoutube size={24} />
          </a>
          <a href="#">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="footer-note">
          <p>
            <img src={originalIcon} alt="Original Guarantee" /> 100% ORIGINAL
            guarantee
          </p>
          <p>
            <img src={returnIcon} alt="Return Policy" /> Return within 14 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
