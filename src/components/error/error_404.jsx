import React from "react";
import { Link } from "react-router-dom";

function error_404({ title, text, link }) {
  return (
    <div className="error">
      <h1 className="error__title">{title}</h1>
      <h2 className="error__text">{text}</h2>
      <Link className="error__link" to="/">
        {link}
      </Link>
    </div>
  );
}

export default error_404;
