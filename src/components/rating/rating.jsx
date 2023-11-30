import React from "react";
import data from "../../data/housing.json";
import StarEmpty from "../../assets/icons/stars_empty.svg";
import StarFull from "../../assets/icons/stars_full.svg";

export default function Stars() {
  return (
    <div className="stars">
      <div className="star">
        <StarEmpty />
        <StarFull />
      </div>
    </div>
  );
}
