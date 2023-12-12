import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/housing/${logement.id}`} className="cards__content">
              <Card texte={logement.title} image={logement.cover} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
