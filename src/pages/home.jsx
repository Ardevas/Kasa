import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/banner/banner.jsx";
import HomeBanner from "../assets/banner/home_banner.png";
import Card from "../components/card/card.jsx";

export default function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/logements.json");
        const data = await response.json();
        setLogements(data);
      } catch (error) {
        console.error("Error fetching logements:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="home__content">
        <Banner image={HomeBanner} texte={"Chez vous, partout et ailleurs"} />
        <div className="cards">
          {logements.map((logement) => (
            <Link
              key={logement.id}
              to={`/housing/${logement.id}`}
              className="cards__content"
            >
              <Card texte={logement.title} image={logement.cover} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
