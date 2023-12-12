import React from "react";
import StarEmpty from "../../assets/stars/star_empty.svg";
import StarFull from "../../assets/stars/star_full.svg";

// Display 0 to 5 stars
export default function Stars({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <div key={index} className="star">
      {index < rating ? (
        <img src={StarFull} alt="Full Star" />
      ) : (
        <img src={StarEmpty} alt="Empty Star" />
      )}
    </div>
  ));
  return <div className="stars">{stars}</div>;
}
