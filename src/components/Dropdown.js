import React, { useState } from "react";

export default function Dropdown(props) {
  const [isActive, setActive] = useState("false");
  const [isPlus, setPlus] = useState("+");

  const handleToggle = () => {
    setActive(!isActive);
    setPlus(!isPlus);
  };

  return (
    <div onClick={handleToggle}>
      <h2>
        {props.heading}
        <span className="plus-minus">{isPlus ? "+" : "-"}</span>
      </h2>
      <div className={isActive ? "hidden" : "block"}>{props.paragraph}</div>
    </div>
  );
}
