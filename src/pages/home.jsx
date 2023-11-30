import React from "react";
import Banner from "../components/banner/banner.jsx";
import HomeBanner from "../assets/banner/home_banner.png";
import Card from "../components/card/card.jsx";
import logements from "../data/logements.json";

export default function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <Banner image={HomeBanner} texte={"Chez vous, partout et ailleurs"} />
        <div className="cards">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              texte={logement.title}
              image={logement.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
