import React from "react";

function Stat({ value, span, paraph }) {
  return (
    <div>
      <h1 id="title-stat">
        {value}
        <span className="text-primary">{span}</span>
      </h1>
      <p className="text-secondary">{paraph}</p>
    </div>
  );
}

export default Stat;
