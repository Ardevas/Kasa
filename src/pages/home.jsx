import React from "react";
import Banner from "../components/banner/banner.jsx";
import HomeBanner from "../assets/banner/home_banner.png";
import Card from "../components/card/card.jsx";

export default function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <Banner image={HomeBanner} texte={"Chez vous, partout et ailleurs"} />
        <div className="cards">
          <Card texte={"Titre de la location"} />
        </div>
      </div>
    </div>
  );
}
