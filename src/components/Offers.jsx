import React from "react";
import "../css/offers.css";
import OfferImage from "../assets/offerImage.png";

function Offer() {
  return (
    <div style={{backgroundColor:"#F8F9FA", marginBottom:"25px"}}>
        <div className="offer-main-div">
            <div className="offer-div">
                <p className="offer-title">Best flight offers & hotel deals</p>
                 <a
                        href="https://www.farefirst.com/in/offers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="offer-link"
                    >
                        See all 
                    </a>
            </div>

            <a href="https://www.farefirst.com/in/offers/169/up-to-20-off-on-economy-class-tickets-qatar-airways-169" style={{textDecoration:"none", color:"black"}}>
                <div className="offer-image">
                    <img src={OfferImage} alt="20% Off Flight Offer" className="offer-image" /> 
                    <div style={{padding:"5px"}}>
                        <p>Up to 20% Off on Economy Class Tickets - Qatar Airways</p>
                    </div>
                </div>
            </a>
            
        </div>
    </div>
  );
}

export default Offer;
