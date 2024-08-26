import React from "react";
import "./WhyOrderOnline.css";
import { assets } from "../../assets/assets";

const WhyOrderOnline = () => {
  return (
    <div className="why-order-online">
      <h2>Here’s Why Ordering Online is the Way to Go</h2>
      <div className="cards-container">
        <div className="card">
        <img className="icons" src={assets.home_icon} alt="house-icon" />
          <h3>Convenience</h3>
          <p>
            Order your favorite meals from the comfort of your home, anytime you
            want.
          </p>
        </div>
        <div className="card">
        <img className="icons" src={assets.discount_icon} alt="discount-icon" />
          <h3>Exclusive Deals</h3>
          <p>Get access to special online-only promotions and discounts.</p>
        </div>
        <div className="card">
        <img className="icons" src={assets.time_icon} alt="time-icon" />
          <h3>Time-Saving</h3>
          <p>Avoid waiting in line and save time by ordering ahead online.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyOrderOnline;
