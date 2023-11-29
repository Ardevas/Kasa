import React from "react";

function Collapse({ title, description }) {
  return (
    <div className="collapse">
      <h4 className="collapse__title">{title}</h4>
      <p className="collapse__content">{description}</p>
    </div>
  );
}

export default Collapse;
