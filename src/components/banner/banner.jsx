import React from "react";

export default function banner({ image, texte }) {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src={image}
        alt="Une falaise en bord de mer"
      />
      <div className="banner__shadow"></div>
      {/* If there is a text, we want to render it */}
      {texte && <h1 className="banner__title">{texte}</h1>}
    </div>
  );
}
