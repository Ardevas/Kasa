import React from "react";

function card({ image, texte }) {
  return (
    <div className="card">
      <img className="card__img" src={image} alt="" />
      <div className="card__shadow"></div>
      <h2 className="card__title">{texte}</h2>
    </div>
  );
}

export default card;
