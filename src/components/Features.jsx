import React from "react";
import "../css/features.css"; 

function Features() {
  return (
    <div className="features-section">
      <div className="features">
        <div className="feature-box">
          <div>
            <i className="fa-solid fa-route feature-icon"></i>
          </div>
          <div>
            <p className="feature-title">Explore the World</p>
            <p className="feature-text">
              Start to discover. We will help you to visit any place you can imagine
            </p>
          </div>
        </div>

        <div className="feature-box">
          <div>
            <i className="fa-solid fa-user-gear feature-icon"></i>
          </div>
          <div>
            <p className="feature-title">Personalized Offers</p>
            <p className="feature-text">
              Save more with offers and coupons personalized for your travel needs
            </p>
          </div>
        </div>

        <div className="feature-box">
          <div>
            <i className="fa-solid fa-book-open-reader feature-icon"></i>
          </div>
          <div>
            <p className="feature-title">Book Smart</p>
            <p className="feature-text">
              Find cheapest flight deals from several websites across the world with ease
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
