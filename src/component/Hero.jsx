import React from "react";
import Boutton from "./Boutton";
import Stat from "./Stat";

function Hero() {
  return (
    <div id="hero">
      <div id="left-hero-part">
        <h4 className="title">COLLECTION SPRING/SUMMER 2026</h4>
        <h1 id="slogan-hero">
          WEAR
          <span id="your">YOUR</span>
          <span id="legend">LEGEND</span>
        </h1>
        <p className="text-secondary">
          Les silhouettes qui ont redéfini le jeu. Chaque paire est une
          déclaration. chaque drop, un événement
        </p>
        <div id="buttons">
          <Boutton
            nameClasse={"boutton gold"}
            value={"EXPLORER LA COLLECTION"}
          />
          <Boutton nameClasse={"boutton classique"} value={"VOIR LES DROPS"} />
        </div>
        <div id="stat">
          <Stat value={"4.2K"} span={"+"} paraph={"MODELES EN STOCK"} />
          <Stat value={"100"} span={"%"} paraph={"AUTHENTIFIÉS"} />
          <Stat value={"48"} span={"H"} paraph={"LIVRAISONS EXPRESS"} />
        </div>
      </div>

      <div id="right-hero-part">
        <img
          id="sneakers-hero"
          src="/src/assets/img/sneakers-hero2.png"
          alt=""
        />
      </div>

    </div>
  );
}

export default Hero;
