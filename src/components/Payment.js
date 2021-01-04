import React, { useRef, useState } from "react";
import { post } from "./rest";

export default function Payment(props) {
  const form = useRef(null);
  const [enabled, setEnable] = useState(false);

  function submit(e) {
    e.preventDefault();
    const payload = props.orders.filter((order) => order.amount > 0);
    console.log(payload);
    post(payload, console.log);
  }

  function validate(evt) {
    setEnable(form.current.checkValidity());
  }

  return (
    <section className={props.step === 1 ? "block dash-comp payment" : "hidden dash-comp payment"}>
      <div className="all-beers">
        <h1>Payment details</h1>

        <form className="card-info step2" ref={form} onSubmit={submit}>
          <h2 className="information">Credit Card Information</h2>
          <input className="cardname" type="text" name="smartname" placeholder="&nbsp;" required onChange={validate} />
          <label htmlFor="smartname" className="label1">
            Smart Name
          </label>

          <input
            className="cardnumber"
            type="text"
            inputMode="numeric"
            name="smartnumber"
            minLength="16"
            maxLength="16"
            placeholder="&nbsp;"
            pattern="^[0-9]*$"
            required
            onChange={validate}
          />
          <label htmlFor="smartnumber" className="label2">
            Smart Number
          </label>

          <input
            className="expiry"
            type="text"
            inputMode="numeric"
            name="expiry"
            minLength="4"
            maxLength="4"
            placeholder="&nbsp;"
            required
            pattern="^[0-9]*$"
            onChange={validate}
          />
          <label htmlFor="expiry" className="label3">
            Expiry
          </label>

          <input
            className="cvv"
            type="text"
            inputMode="numeric"
            name="security"
            minLength="3"
            maxLength="3"
            placeholder="&nbsp;"
            required
            pattern="^[0-9]*$"
            onChange={validate}
          />
          <label htmlFor="security" className="label4">
            Cvv
          </label>

          <button className="buttons submit-button" type="submit" disabled={!enabled} onClick={() => props.changeStep(2)}>
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
}
