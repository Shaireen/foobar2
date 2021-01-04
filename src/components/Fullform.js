import React, { useState, useEffect } from "react";
import Beer from "./Beer";
// import Time from "./Time";
import { checkPrice } from "./rest";
import { post } from "./rest";

export default function Fullform(props) {
  const [step, setStep] = useState(0);
  const cleanArr = [];
  const [prices, setPrice] = useState([]);
  useEffect(() => {
    checkPrice(setPrice);
  }, []);

  function submit(e) {
    e.preventDefault();
    const payload = props.orders.filter((order) => order.amount > 0);
    console.log(payload);
    post(payload, console.log);
  }

  props.orders.forEach((obj) => {
    if (cleanArr.some((beer) => beer.name === obj.name)) {
    } else {
      cleanArr.push(obj);
    }
  });
  return (
    <form onSubmit={submit} className="form-main dash-grid">
      <section className={step === 0 ? "step1 block" : "step1 hidden"}>
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
      </section>
      <section className={step === 2 ? "order dash-comp block" : "order dash-comp hidden"}>
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
        <button className="buttons" onClick={() => setStep(1)}>
          Proceed
        </button>
      </section>
      <section className={step === 1 ? "step2 block" : "step2 hidden"}>
        <h2 className="information">Credit Card Information</h2>

        <input className="cardname" type="text" name="smartname" placeholder="&nbsp;" required />
        <label htmlFor="smartname" className="label1">
          Smart Name
        </label>

        <input className="cardnumber" type="text" inputmode="numeric" name="smartnumber" maxLength="16" placeholder="&nbsp;" required />
        <label htmlFor="smartnumber" className="label2">
          Smart Number
        </label>

        <input className="expiry" type="text" inputmode="numeric" name="expiry" maxLength="6" placeholder="&nbsp;" required />
        <label htmlFor="expiry" className="label3">
          Expiry
        </label>

        <input className="cvv" type="text" inputmode="numeric" name="security" maxLength="3" placeholder="&nbsp;" required />
        <label htmlFor="security" className="label4">
          Cvv
        </label>

        <button className="submit-button" type="submit" onClick={() => setStep(2)}>
          Place Order
        </button>
      </section>
      <section className={step === 2 ? "step3 block" : "step3 hidden"}>
        <div className="wrap-it">
          <img src="succes.png" alt="succes" />
          <h2>PAYMENT SUCCESFUL!</h2>

          <button type="button" className="back-button">
            BACK
          </button>
        </div>
      </section>
    </form>
  );
}
