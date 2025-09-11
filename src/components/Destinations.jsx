import React from "react";
import "../css/destination.css";

function Destinations(){
    return(
        <div style={{display:"flex", justifyContent:"center"}}>
            <div className="destination-main-div">
                    <p style={{color:"black", fontSize:"32px", fontWeight:"600"}}>Top Destinations</p>
                    <p style={{color:"rgba(99, 97, 97, 1);", fontSize:"18px", fontWeight:"400"}}>The most searched countries in FareFirst</p>
                <div className="destination content">
                    <div className="destination-row1">
                        <div className="spain">
                            <div>Spain</div>
                            <div>#spainindetail</div>
                        </div>
                        <div className="turkey">
                            <div>Turkey</div>
                            <div>Be out guest</div>
                        </div>
                        <div className="morocco">
                            <div>Morocco</div>
                            <div>Much More</div>
                        </div>
                    </div>
                    <div className="destination-row2">
                        <div className="france">
                            <div>France</div>
                            <div>Rendez vous en France</div>
                        </div>
                        <div className="thailand">
                            <div>Thailand</div>
                            <div>Amazing Thailand</div>
                        </div>
                        <div className="mexico">
                            <div>Mexico</div>
                            <div>Live it Believe it</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations;