import React from "react";
import Card from "./Card";

function Univers() {
  return (
    <div id="univers">
      <div id="titles">
        <h4 className="title">EXPLORER PAR UNIVERS</h4>
        <h1>NOS UNIVERS</h1>
      </div>
      <div id="cards">
        <Card
          url={"src/assets/img/sneakers-univers.png"}
          nameCard={"sneakers"}
          description={"824 modeles"}
        />
        <Card
          url={"src/assets/img/apparel-univers.png"}
          nameCard={"apparel"}
          description={"364 pieces"}
        />
        <Card
          url={"src/assets/img/accessoires-univers.png"}
          nameCard={"accessoires"}
          description={"196 refs"}
        />
        <Card
          url={"src/assets/img/drops-univers.png"}
          nameCard={"derniers drops"}
          description={"nouveautés"}
        />
      </div>
    </div>
  );
}

export default Univers;
