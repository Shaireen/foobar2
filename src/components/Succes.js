import React from "react";

export default function Succes(props) {
  return (
    <section className={props.step === 2 ? "block" : "hidden"}>
      <div className="wrap-it succes dash-comp">
        <img src="succes.png" alt="succes" />
        <h2>PAYMENT SUCCESFUL!</h2>
        <p>Thank you for your purchase</p>

        <button className="back-button buttons" onClick={() => props.changePage("home")} type="button">
          BACK
        </button>
      </div>
    </section>
  );
}
