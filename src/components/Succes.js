import React from "react";

export default function Succes(props) {
  function returnHome() {
    props.changeStep(0);
    props.changePage("home");
  }
  return (
    <section className={props.step === 2 ? "block" : "hidden"}>
      <div className="wrap-it succes dash-comp">
        <img src="succes.png" alt="succes" />
        <h2>PAYMENT SUCCESFUL!</h2>
        <p>Thank you for your purchase</p>
        <p>Your ID is {props.orderInfo.id}</p>

        <button className="back-button buttons" type="button" onClick={returnHome}>
          BACK
        </button>
      </div>
    </section>
  );
}
