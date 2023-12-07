import React from "react";

export default function Host({ name, picture }) {
  return (
    <div className="host">
      <p className="host__name">{name}</p>
      <img className="host__img" src={picture} alt="" />
    </div>
  );
}
