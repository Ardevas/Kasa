import React from "react";
import Banner from "../components/banner/banner.jsx";
import about_banner from "../assets/banner/about_banner.png";

export default function About() {
  return (
    <div className="about">
      <div className="about__content">
        <Banner image={about_banner} texte={""} />
      </div>
    </div>
  );
}
