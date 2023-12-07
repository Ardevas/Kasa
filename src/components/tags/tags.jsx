import React from "react";

export default function Tags({ tags }) {
  return (
    <div className="tags">
      <ul className="tags__list">
        {tags.map((tag, index) => (
          <li className="tag" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
