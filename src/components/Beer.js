import React, { useState } from "react";

export default function Beer(props) {
  const [isActive, setActive] = useState("false");
  const [isPlus, setPlus] = useState("+");
  const thisBeer = props.prices.filter((beer) => beer.name === props.name);
  const beerPrice = thisBeer[0] ? thisBeer[0].price : "";

  const handleToggle = () => {
    setActive(!isActive);
    setPlus(!isPlus);
  };

  return (
    <div className="beer-desc">
      <div onClick={handleToggle}>
        <h2 className="beer-name">
          {props.name} ({props.info[0].alc}%)
          <span className={isPlus ? "arrow-down" : "arrow-up"}>&#8963;</span>
        </h2>
        <div className="beer-cat">
          <p>{props.info[0].category}</p>
        </div>
        <div className={isActive ? "hidden" : "block"}>
          <h3>Aroma</h3>
          <p>{props.info[0].description.aroma}</p>
          <p onClick={() => props.changePage("beer")} className="read">
            read more
          </p>
        </div>
      </div>
      <div className="beer-alc">
        <h2 className="beer-price">{beerPrice} DKK</h2>

        <div className="buttons">
          <button type="button" onClick={(evt) => props.onUpdate(props.name, evt)} value={props.amount - 1}>
            -
          </button>
          <input className="btn-input" type="number" value={props.amount} onChange={(evt) => props.onUpdate(props.name, evt)} />
          <button type="button" onClick={(evt) => props.onUpdate(props.name, evt)} value={Number(props.amount) + 1}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
