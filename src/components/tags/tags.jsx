import React from "react";

export default function Tags({ tags }) {
  return (
    <div className="tags">
      <ul className="tags__list">
        {/* Map through the tags array and render a <li> for each tag */}
        {tags.map((tag, index) => (
          <li className="tag" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
