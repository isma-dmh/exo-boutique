import React from "react";

function Liste({id,value}) {
  return (
    <li>
      <a href={id}>{value}</a>
    </li>
  );
}

export default Liste;
