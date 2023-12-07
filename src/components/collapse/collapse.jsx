import React, { useState } from "react";
import ChevronUp from "../../assets/logo/chevron_up.svg";

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
          <img src={ChevronUp} alt="Chevron" />
        </span>
      </h4>
      {isExpanded && <p className="collapse__content">{description}</p>}
    </div>
  );
}
