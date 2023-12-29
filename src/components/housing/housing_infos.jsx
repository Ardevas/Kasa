import React from "react";

export default function housing_infos({ title, location }) {
  return (
    <div className="housingInfos">
      <h2>{title}</h2>
      <h3>{location}</h3>
    </div>
  );
}
