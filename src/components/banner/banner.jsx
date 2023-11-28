import React from "react";
import home_banner from "../../assets/banner/home_banner.png";

function banner({ image, texte }) {
  return (
    <div className="banner">
      <img
        src={home_banner}
        alt="Une falaise en bord de mer"
        className="banner__img"
      />
      <div className="banner__title">
        <h1>
          <span>Chez vous,</span>
          <span>partout et ailleurs</span>
        </h1>
      </div>
    </div>
  );
}

export default banner;
