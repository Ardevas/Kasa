import React, { useState } from "react";
import ChevronUp from "../../assets/logo/chevron_up.svg";
import ChevronDown from "../../assets/logo/chevron_down.svg";

function Collapse({ title, description }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`collapse ${isExpanded ? "expanded" : ""}`}>
      <h4 className="collapse__title">
        {title}{" "}
        <span className="collapse__chevron" onClick={toggleExpand}>
          {isExpanded ? <img src={ChevronDown} /> : <img src={ChevronUp} />}
        </span>
      </h4>
      {isExpanded && <p className="collapse__content">{description}</p>}
    </div>
  );
}

export default Collapse;
