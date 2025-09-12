import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Email from "../components/Email";
import Download from "../components/Download";
import TravelAgency from "../components/Travelagency";
import Features from "../components/Features";
import Title from "../components/Title";
import Search1 from "../components/Search";
import Offers from "../components/Offers";
import Destinations from "../components/Destinations";

import bgImage from "../assets/bg-image.png";

function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <Header />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          <Title />
          <Search1 />
          <Features />
        </div>
      </div>

      <TravelAgency />
      <Offers />
      <Destinations />
      <Download />
      <Email />
      <Footer />
    </div>
  );
}

export default Home;
