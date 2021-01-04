import React, { useState } from "react";
import Order from "./Order";

export default function BuyDropdown(props) {
  const [isActive, setActive] = useState("false");
  const [isPlus, setPlus] = useState("+");

  const handleToggle = () => {
    setActive(!isActive);
  };
  const handlePlusOne = () => {
    setPlus(!isPlus);
  };

  const thisBeer = props.prices.filter((beer) => beer.name === props.name);
  const beerPrice = thisBeer[0] ? thisBeer[0].price : "";
  //   console.log(beerPrice);

  return (
    <div className="one-beer" onClick={handleToggle}>
      <div className="beer-container" onClick={handlePlusOne}>
        <h2>
          {props.name} ({props.vol}%)
          <span className="plus-minus">{isPlus ? "+" : "-"}</span>
        </h2>
        <div className="beer-cat">
          <p>{props.cat}</p>
        </div>
        <h2 className="beer-price">{beerPrice} DKK</h2>
        <Order orders={props.orders} />
        <div className={isActive ? "hidden" : "block"}>
          <div className="col">
            <div className="aroma">
              <h3 className="beer-title">Aroma</h3>
              <p>{props.aroma}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
