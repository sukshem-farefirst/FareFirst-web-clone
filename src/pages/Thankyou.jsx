import React from "react";
import "../css/thankyou.css";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="thankyou-div">
      <div className="thankyou-card">
        <div className="thankyou-icon">🎉</div>
        <h1 className="thankyou-title">Thank You for Booking!</h1>
        <p className="thankyou-message">
          Your flight has been successfully booked.  
          We’ve sent the details to your registered email.
        </p>
        <button className="thankyou-btn" onClick={handleGoHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
