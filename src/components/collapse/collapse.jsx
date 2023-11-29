import React from "react";

function collapse({ title, children }) {
  return (
    <div className="collapse">
      <h4 className="collapse__title">{title}</h4>
      <p className="collapse__content">{children}</p>
    </div>
  );
}

export default collapse;
