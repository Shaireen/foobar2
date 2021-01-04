import React, { useEffect, useState } from "react";
import BeerDropdown from "./BeerDropdown";
import { checkPrice } from "./rest";

export default function AllBeers(props) {
  const [prices, setPrice] = useState([]);
  useEffect(() => {
    checkPrice(setPrice);
  }, []);

  const beerArray = props.beers;
  return (
    <div className="all-beers">
      <h1>Beer information</h1>
      <p className="beer-desc">
        Here you can read about the selection of beers we brew. <br />
        Be aware of not all beers are on tap at all times.
      </p>
      {beerArray.map((beer) => {
        return (
          <BeerDropdown
            name={beer.name}
            vol={beer.alc}
            cat={beer.category}
            prices={prices}
            aroma={beer.description.aroma}
            appearance={beer.description.appearance}
            flavor={beer.description.flavor}
            mouthfeel={beer.description.mouthfeel}
            overall={beer.description.overallImpression}
          />
        );
      })}
    </div>
  );
}
