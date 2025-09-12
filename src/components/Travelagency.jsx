import React from "react";
import Kiwi from "../assets/kiwi.png";
import Expedia from "../assets/Expedia.png";
import Flight from "../assets/FightNetwork.png";
import Indigo from "../assets/Indigo.png";
import Yatra from "../assets/yatra.png";
import "../css/travelagency.css";  

function TravelAgency() {
  return (
    <div className="agency-container">
      <p className="agency-title">
        Compare prices among leading airlines and travel agencies
      </p>
      <div className="agency-logo">
        <a href="https://www.kiwi.com/en/"><img src={Kiwi} alt="Kiwi" /></a>
        <a href="https://www.expedia.com/"><img src={Expedia} alt="Expedia" /></a>
        <a href="https://www.flightnetwork.com/"><img src={Flight} alt="Flight Network" /></a>
        <a href="https://www.goindigo.in/"><img src={Indigo} alt="Indigo" /></a>
        <a href="https://www.yatra.com/"><img src={Yatra} alt="Yatra" /></a>
      </div>
    </div>
  );
}

export default TravelAgency;
