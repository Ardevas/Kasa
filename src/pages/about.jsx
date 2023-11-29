import React from "react";
import Banner from "../components/banner/banner.jsx";
import AboutBanner from "../assets/banner/about_banner.png";
import Collapse from "../components/collapse/collapse.jsx";

export default function About() {
  return (
    <div className="about">
      <div className="about__content">
        <Banner image={AboutBanner} texte={""} />
      </div>
      <div className="about__collapse">
        <Collapse title={"Fiabilité"} children={"test"} />
        <Collapse title={"Respect"} children={"test"} />
        <Collapse title={"Service"} children={"test"} />
        <Collapse title={"Sécurité"} children={"test"} />
      </div>
    </div>
  );
}
