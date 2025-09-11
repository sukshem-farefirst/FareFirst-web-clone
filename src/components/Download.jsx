import React from "react";
import "../css/download.css";

import Play from "../assets/homepage/playstore.svg";
import Huawei from "../assets/homepage/huawei.svg";
import App from "../assets/homepage/app.svg";
import Indus from "../assets/homepage/indusapp.png";
import Galaxy from "../assets/homepage/galaxyStore.png";
import Bixby from "../assets/homepage/Bixby.png";
import Phone from "../assets/homepage/mobile.png";

function Download() {
    return (
        <div className="downloadmaindiv">
            <div className="downloadtext">
                <div>
                    <h2>Download our app</h2>
                    <p>
                        Unlock a world of travel possibilities with the FareFirst app – 
                        the best travel app for your mobile device.
                    </p>
                </div>
                <div className="downloadmainimage">
                    <div className="downloadimage">
                        <a href="https://play.google.com/store/apps/details?id=com.cheapflightsapp.flightbooking">
                            <img src={Play} alt="Google PlayStore" />
                        </a>
                        <a href="https://appgallery.huawei.com/app/C101289807">
                            <img src={Huawei} alt="Huawei AppGallery" />
                        </a>
                        <a href="https://apps.apple.com/in/app/farefirst-flights-hotels/id1435065486">
                            <img src={App} alt="Apple App Store" />
                        </a>
                    </div>
                    <div className="downloadimage">
                        <a href="https://www.indusappstore.com/apps/travel-and-local/farefirst/com.cheapflightsapp.flightbooking?page=details&id=com.cheapflightsapp.flightbooking">
                            <img src={Indus} alt="Indus App Bazaar" />
                        </a>
                        <a href="https://galaxystore.samsung.com/detail/com.cheapflightsapp.flightbooking">
                            <img src={Galaxy} alt="Galaxy Store" />
                        </a>
                        <a href="https://www.samsung.com/us/apps/bixby/">
                            <img src={Bixby} alt="Bixby Store" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="downloadphone">
                <img src={Phone} alt="Phone app preview" />
            </div>
        </div>
    );
}

export default Download;
