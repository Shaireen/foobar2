import React from "react";

export default function BigButtons(props) {
  return (
    <section className="big-buttons">
      <div className="big-button1-container">
        <button onClick={() => props.changePage("buy")} className="dash-comp big-button big-button1">
          <img src="cart2-04.png" className="big-icon" alt="cart icon" />
          <p>Buy beer</p>
        </button>
      </div>
      <div className="big-button2-container">
        <button onClick={() => props.changePage("beer")} className=" dash-comp big-button big-button2">
          <img src="icons-03.png" className="big-icon" alt="beer icon" />
          <p>Beer info</p>
        </button>
      </div>
    </section>
  );
}
