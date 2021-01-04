import React from "react";
import Header from "./Header";
import Home from "./Home";
import Info from "./Info";
import Nav from "./Nav";
import Buybeer from "./Buy";
import Payment from "./Payment";
import Succes from "./Succes";
import Time from "./Time";

export default function Main(props) {
  return (
    <main className="dashboard">
      <Header data={props.data} changePage={props.changePage} changeTheme={props.changeTheme} />
      <Nav changePage={props.changePage} />

      {props.page === "home" ? <Home data={props.data} beers={props.beers} changePage={props.changePage} changeTheme={props.changeTheme} /> : null}

      {props.page === "beer" ? <Info data={props.data} beers={props.beers} changePage={props.changePage} changeTheme={props.changeTheme} /> : null}

      {props.page === "buy" ? (
        <>
          <svg className="nav-svg svg-buy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 140" x="0px" y="0px">
            <path
              d="M95,0v140c0-9.7-3.9-18.4-10.2-24.8C78.4,108.9,69.7,105,60,105H35C15.7,105,0,89.3,0,70
c0-9.7,3.9-18.4,10.2-24.8C16.6,38.9,25.3,35,35,35h25C79.3,35,95,19.3,95,0z"
            />
          </svg>
          <div className="dash-grid">
            <section className="dash-comp closing">
              <Time data={props.data} changeTheme={props.changeTheme} />
            </section>
            <Buybeer changeStep={props.changeStep} beers={props.beers} orders={props.orders} orderChanged={props.orderChanged} prices={props.prices} step={props.step} />

            <Payment changeStep={props.changeStep} step={props.step} orders={props.orders} beers={props.beers} />
            <Succes changeStep={props.changeStep} step={props.step} changePage={props.changePage} />
          </div>
        </>
      ) : null}
    </main>
  );
}
