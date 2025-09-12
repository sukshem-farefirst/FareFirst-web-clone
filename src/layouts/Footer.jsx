import React from "react";
import Logo from "../assets/logo2.png";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footermain">
        <div className="footer-section">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <span className="footer-text">
            Helps you find the cheapest flight deals to any destination with ease.
          </span>
          <span className="footer-text">
            Browse through the best hotels and find exclusive deals.
          </span>
        </div>

        <div style={{display:"flex",flexDirection:"row", gap:"4vw"}}>
          <div className="footerlinks">
            <h5>About</h5>
            <a href="https://www.farefirst.com/about">About Us</a>
            <a href="https://play.google.com/store/apps/details?id=com.cheapflightsapp.flightbooking">Android App</a>
            <a href="https://apps.apple.com/in/app/farefirst-flights-hotels/id1435065486">iOS App</a>
            <a href="https://www.farefirst.com/nomad-multi-destination-trip-planner">About Nomad</a>
            <a href="https://www.farefirst.com/blog/index.html">Blog</a>
          </div>

          <div className="footerlinks">
            <h5>Explore</h5>
            <a href="/">Flights</a>
            <a href="https://www.farefirst.com/hotels">Hotels</a>
            <a href="https://www.farefirst.com/cars">Cars</a>
            <a href="https://www.farefirst.com/nomad">Nomad</a>
            <a href="https://www.farefirst.com/visa">Visa</a>
            <a href="https://www.farefirst.com/esim">eSIM</a>
            <a href="https://www.farefirst.com/experience">Experience</a>
            <a href="https://www.farefirst.com/in/offers">Offers</a>
            <a href="https://www.farefirst.com/cheap-flights-app">Mobile App</a>
          </div>

          <div className="footerlinks">
            <h5>More</h5>
            <a href="https://www.farefirst.com/contact-us">Customer Support</a>
            <a href="https://www.farefirst.com/terms-of-use">Terms of Use</a>
            <a href="https://www.farefirst.com/privacy-policy">Privacy Policy</a>
            <a href="https://www.farefirst.com/cancel-refund">Refund Policy</a>
            <a href="https://www.farefirst.com/shipping-delivery">Shipping & Delivery Policy</a>
          </div>
        </div>
        </div>

      <div className="footerbottom">
        <p className="footer-content">
          © 2018-2025 Amahop Technologies Pvt. Ltd. All rights reserved.
        </p>
        <div className="social-icons">
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
