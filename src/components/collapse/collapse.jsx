import React, { useState } from "react";
import Chevron from "../../assets/icons/chevron.svg";

export default function Collapse({ title, description }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`collapse ${isExpanded ? "expanded" : ""}`}>
      <h4 className="collapse__title">
        {title}{" "}
        <span className="collapse__chevron" onClick={toggleExpand}>
          <img src={Chevron} alt="Chevron" />
        </span>
      </h4>
      <div className="collapse__content">
        {/* If the title is "Equipements", we want to render a list of items */}
        {title.toLowerCase() === "equipements" ? (
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
}
