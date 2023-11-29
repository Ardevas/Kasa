import React from "react";

function banner({ image, texte }) {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src={image}
        alt="Une falaise en bord de mer"
      />
      <div className="banner__shadow"></div>
      <h1 className="banner__title">{texte}</h1>
    </div>
  );
}

export default banner;
