import React from "react";
import Carrousel from "../components/carrousel/carrousel.jsx";
// import Housing from "../components/housing/housing.jsx";

export default function Housing() {
  return (
    <div className="housing">
      <div className="housing__content">
        <Carrousel />
        <Housing />
      </div>
    </div>
  );
}
