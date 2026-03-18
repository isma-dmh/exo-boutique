import React from "react";

function Card({ url, nameCard, description }) {
  return (
    <a href="https://google.com" className="card" target="blank">
      <img src={url} alt={nameCard} className="img-card" />
      <p className="text-card">{nameCard.toUpperCase()}</p>
      <p className="text-secondary description-card">{description.toUpperCase()}</p>
      <h3 className="text-primary show-more">VOIR PLUS →</h3>
    </a>
  );
}

export default Card;
