import React, { useState } from "react";

export default function WelcomeDropdown(props) {
  const [isActive, setActive] = useState("false");
  const [isPlus, setPlus] = useState("+");

  const handleToggle = () => {
    setActive(!isActive);
    setPlus(!isPlus);
  };

  return (
    <section className="welcome dash-comp" onClick={handleToggle}>
      <h1>
        {props.heading}
        <span className="plus-minus">{isPlus ? "-" : "+"}</span>
      </h1>
      <div className={isActive ? "block" : "hidden"}>{props.paragraph}</div>
    </section>
  );
}
