import React, { useState, useEffect } from "react";
import Beer from "./Beer";
import { checkPrice } from "./rest";

export default function Buy(props) {
  const cleanArr = [];
  //   const [step, setStep] = useState(0);
  const [prices, setPrice] = useState([]);
  useEffect(() => {
    checkPrice(setPrice);
  }, []);

  props.orders.forEach((obj) => {
    if (cleanArr.some((beer) => beer.name === obj.name)) {
    } else {
      cleanArr.push(obj);
    }
  });
  return (
    <>
      <section className={props.step === 0 ? "block buy-beer dash-comp" : "hidden buy-beer dash-comp"}>
        <div className="all-beers">
          <h1>Our beers</h1>
          <div className="buy-intro">
            <h2>
              Welcome to FooBar
              <br />
              may we take your order?
            </h2>
            <p>Be aware of not all beers are on tap at all times, so the beers you see here are the beers we have on tap at the moment.</p>
            <p>All beers are served in 0.5L glasses</p>
          </div>
          {cleanArr.map((beer, index) => {
            return (
              <Beer
                key={index}
                prices={prices}
                info={props.beers.filter((item) => item.name === beer.name)}
                changePage={props.changePage}
                name={beer.name}
                amount={beer.amount}
                onUpdate={props.orderChanged}
              />
            );
          })}
        </div>
      </section>
      {/* <section className={step === 1 ? "order dash-comp hidden" : "order dash-comp block"}> */}
      <section className="order dash-comp">
        <div className="order-container">
          <div className="order-list-container">
            <h2>Your Order</h2>
            {cleanArr
              .filter((order) => order.amount > 0)
              .map((beer, index) => {
                return (
                  <div className="order-list">
                    <p className="bold" key={index}>
                      {beer.amount} x
                    </p>
                    <p>{beer.name}</p>
                  </div>
                );
              })}
          </div>
          <button
            className={props.step === 0 ? "block buy-beer dash-comp btn-arrow buttons" : "hidden buy-beer dash-comp btn-arrow buttons"}
            onClick={() => props.changeStep(1)}
          >
            <span>Proceed</span>
          </button>
        </div>
      </section>
    </>
  );
}
