import React, { useState } from "react";
import Marque from "../Marque";

function Bandeau() {
  const listMarques = [
    "Nike",
    "Adidas",
    "Jordan",
    "New Balance",
    "Converse",
    "Puma",
    "Vans",
    "Reebok",
    "Asics",
    "Saucony",
    "UnderArmour",
    "Balenciaga",
    "Off-White",
    "Salomon",
    "Hoka",
  ];

  const [count, setCount] = useState(0);

  const moving = () => (count < 77 ? setCount(count + 0.1) : setCount(0.1));

  setTimeout(moving, 100);

  return (
    <div id="bandeau" style={{ transform: `translateX(-${count}%)` }}>
      <Marque marques={listMarques} />
    </div>
  );
}

export default Bandeau;
