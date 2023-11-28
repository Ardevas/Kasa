import React from "react";
import Banner from "../components/banner/banner.jsx";
import Home_banner from "../assets/banner/home_banner.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <Banner image={Home_banner} texte={"Chez vous, partout et ailleurs"} />
      </div>
    </div>
  );
}
