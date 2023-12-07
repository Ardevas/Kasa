import React from "react";

function host({ name, picture }) {
  return (
    <div className="host">
      <p className="host__name">{name}</p>
      <img className="host__img" src={picture} alt="" />
    </div>
  );
}

export default host;
