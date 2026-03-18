import React from "react";

function Marque({marques}) {
  
  const listeMarque = marques.map((marque) => {
    return marque == marques[marques.length - 1] ? (
      <span key={marque} className="text-secondary marque">{marque.toUpperCase()}</span>
    ) : (
      <React.Fragment key={marque}>
        <span  className="text-secondary marque">{marque.toUpperCase()}</span>
        <span  className="text-primary plus">+</span>
      </React.Fragment>
    );
  });

  return listeMarque;
}

export default Marque;
