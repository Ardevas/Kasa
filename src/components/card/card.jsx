import React from "react";

export default function card({ image, texte }) {
  return (
    <div className="card">
      <img className="card__img" src={image} alt="" />
      <h2 className="card__title">{texte}</h2>
    </div>
  );
}
