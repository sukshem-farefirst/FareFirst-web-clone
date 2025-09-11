import React from "react";
import "../css/title.css";

function Title() {
  return (
    <div className="title-container" style={{paddingTop:"4vh", paddingBottom: "2.5vh"}}>
      <div className="title-header">
        <div className="maintitle">Book a Flight</div>
        <div className="subtitle">Search hundreds of travel sites at once</div>
      </div>
      <div></div><div></div>
    </div>
  );
}

export default Title;
