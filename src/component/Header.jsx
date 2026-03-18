import React from "react";
import Liste from "./Liste";

function Header() {
  return (
    <header>
      <h1 id="logo">
        KRV<span>N</span>
      </h1>

      <nav>
        <ul>
          <Liste id={"home"} value={"HOME"} />
          <Liste id={"sneakers"} value={"SNEAKERS"} />
          <Liste id={"apparel"} value={"APPAREL"} />
          <Liste id={"drops"} value={"DROPS"} />
          <Liste id={"resell"} value={"RESELL"} />
        </ul>
      </nav>

      <ul>
        <Liste id={"search"} value={"🔍"} />
        <Liste id={"favoris"} value={"♡"} />
        <Liste id={"panier"} value={"🛒"} />
      </ul>
    </header>
  );
}

export default Header;
