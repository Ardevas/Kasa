import React from "react";
import Banner from "../components/banner/banner.jsx";
import AboutBanner from "../assets/banner/about_banner.png";
import Collapse from "../components/collapse/collapse.jsx";
import data from "../data/collapse.json";

export default function About() {
  return (
    <div className="about">
      <div className="about__content">
        <Banner image={AboutBanner} texte={""} />
      </div>
      <div className="about__collapse">
        {data.map((item) => (
          <Collapse
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
