import React from "react";
import { useState } from "react";

function Button({ clr, clr_name, click }) {
  const [color, setColor] = useState(clr);

  return (
    <button
      onClick={() => {
        click(clr);
      }}
      style={{ backgroundColor: color }}
      className="text-white px-4 py-1 mx-2 rounded-md border-2 border-white"
    >
      {clr_name}
    </button>
  );
}

export default Button;
