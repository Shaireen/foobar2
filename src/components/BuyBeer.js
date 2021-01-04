import React, { useEffect, useState } from "react";
import Time from "./Time";
import Beer from "./Beer";
import { checkPrice } from "./rest";

// import Dropdown from "muicss/lib/react/dropdown";

export default function BuyBeer(props) {
  const mediaQueryLaptop = window.matchMedia("(min-width: 1000px)");
  const [prices, setPrice] = useState([]);
  useEffect(() => {
    checkPrice(setPrice);
  }, []);
  const beerArray = props.beers;

  // new array that will contain no duplicates
  const cleanArr = [];

  // loop through each beer to find duplicates
  props.orders.forEach((obj) => {
    // check if duplicated
    if (cleanArr.some((beer) => beer.name === obj.name)) {
      // console.log("exists");
    } else {
      // else push all non duplicates to the clean array
      // console.log("doesnt exist");
      cleanArr.push(obj);
    }
  });

  if (mediaQueryLaptop.matches) {
    return (
      <div className="dash-grid">
        <section className="buy-beer dash-comp">{/* <AllBeers beers={props.beers} /> */}</section>

        <section className="dash-comp closing">
          <Time data={props.data} />
        </section>

        {/* <section className="popular dash-comp">
            <h2>Most popular beers</h2>
      <Popular beers={props.beers} data={props.data} />
      </section> */}

        {/* <section className="beer-info-buttons">
      <BigButtons/>
      </section> */}
      </div>
    );
  } else {
    return (
      <section className="buy-beer dash-comp">
        <h1>Our beers</h1>
        <h2>
          Welcome to FooBar
          <br />
          May we take your order?
        </h2>
        <p className="beer-desc">
          Be aware of not all beers are on tap at all times, so the beers you see here are the beers we have on tap at the moment.
        </p>
        <p className="beer-desc">All beers are served in 0.5L glasses</p>

        {cleanArr.map((beer, index) => {
          return (
            <Beer
              key={index}
              name={beer.name}
              amount={beer.amount}
              onUpdate={props.orderChanged}
              vol={beer.alc}
              cat={beer.category}
              prices={prices}
            />
          );
        })}
        <h2>Order</h2>
        {cleanArr
          .filter((order) => order.amount > 0)
          .map((beer, index) => {
            return (
              <p className="order-text" key={index}>
                {beer.name} x {beer.amount}
              </p>
            );
          })}
      </section>
    );
  }
}
