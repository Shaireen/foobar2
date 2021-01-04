import React, { useState } from "react";

export default function BeerDropdown(props) {
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
  // console.log(beerPrice);

  return (
    <div className="one-beer" onClick={handleToggle}>
      <div className="beer-container" onClick={handlePlusOne}>
        <h2>
          {props.name}
          <span className={isPlus ? "arrow-down" : "arrow-up"}>&#8963;</span>
        </h2>
        <div className="beer-cat">
          <p>{props.cat}</p>
        </div>
        <div className="beer-alc">
          <p className="beer-percent">{props.vol}%</p>
          <h2 className="beer-price">{beerPrice} DKK</h2>
        </div>
        <div className={isActive ? "hidden" : "block"}>
          <div className="col">
            <div className="aroma">
              <h3 className="beer-title">Aroma</h3>
              <p>{props.aroma}</p>
            </div>

            <div className="appearance">
              <h3 className="beer-title">Appearance</h3>
              <p>{props.appearance}</p>
            </div>
          </div>
          <div className="col">
            <div className="flavor">
              <h3 className="beer-title">Flavor</h3>
              <p>{props.flavor}</p>
            </div>

            <div className="mouthfeel">
              <h3 className="beer-title">Mouthfeel</h3>
              <p>{props.mouthfeel}</p>
            </div>

            <div className="impression">
              <h3 className="beer-title">Overall impression</h3>
              <p>{props.overall}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
