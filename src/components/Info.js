import React from "react";
import Popular from "./Popular";

// import Serving from "./Serving";
import AllBeers from "./AllBeers";
import Time from "./Time";
import BigButtons from "./BigButtons";

// import Dropdown from "muicss/lib/react/dropdown";

export default function Info(props) {
  const mediaQueryLaptop = window.matchMedia("(min-width: 1000px)");

  if (mediaQueryLaptop.matches) {
    return (
      <>
        <svg className="nav-svg svg-beer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 140" x="0px" y="0px">
          <path
            d="M95,0v140c0-9.7-3.9-18.4-10.2-24.8C78.4,108.9,69.7,105,60,105H35C15.7,105,0,89.3,0,70
	c0-9.7,3.9-18.4,10.2-24.8C16.6,38.9,25.3,35,35,35h25C79.3,35,95,19.3,95,0z"
          />
        </svg>
        <div className="dash-grid">
          <section className="beer-info dash-comp">
            <AllBeers beers={props.beers} />
          </section>

          <section className="dash-comp closing">
            <Time data={props.data} changeTheme={props.changeTheme} />
          </section>

          <section className="popular dash-comp">
            <h2>Most popular beers</h2>
            <Popular beers={props.beers} data={props.data} />
          </section>

          <section className="beer-info-buttons">
            <BigButtons changePage={props.changePage} />
          </section>
        </div>
      </>
    );
  } else {
    return (
      <section className="beer-info dash-comp">
        <AllBeers beers={props.beers} />
      </section>
    );
  }
}
