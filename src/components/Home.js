import React from "react";
import Dropdown from "./Dropdown";
import Popular from "./Popular";
import Queue from "./Queue";
import Bartenders from "./Bartenders";
// import Serving from "./Serving";
import AllBeers from "./AllBeers";
import WelcomeDropdown from "./Welcome";
import Time from "./Time";
import BigButtons from "./BigButtons";

// import Dropdown from "muicss/lib/react/dropdown";

export default function Home(props) {
  const mediaQueryLaptop = window.matchMedia("(min-width: 1000px)");

  if (mediaQueryLaptop.matches) {
    return (
      <>
        <svg className="nav-svg svg-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 140" x="0px" y="0px">
          <path
            d="M95,0v140c0-9.7-3.9-18.4-10.2-24.8C78.4,108.9,69.7,105,60,105H35C15.7,105,0,89.3,0,70
 c0-9.7,3.9-18.4,10.2-24.8C16.6,38.9,25.3,35,35,35h25C79.3,35,95,19.3,95,0z"
          />
        </svg>
        <div className="dash-grid">
          <section className="dash-comp welcome">
            <h1>
              Welcome to
              <br />
              <span>foobar!</span>
            </h1>
            <p>Welcome to FooBar! We have a selection of premium beers for you to enjoy. Feel free to order your beers below and have a great evening!</p>
          </section>

          <section className="queue dash-comp">
            <h2>The queue</h2>
            <Queue data={props.data} />
          </section>

          <section className="popular dash-comp">
            <h2>Most popular beers</h2>
            <Popular beers={props.beers} data={props.data} />
          </section>

          <section className="bartenders dash-comp">
            <h2>The bartenders</h2>
            <Bartenders data={props.data} />
          </section>

          <section className="dash-comp closing">
            <Time data={props.data} changeTheme={props.changeTheme} />
          </section>

          <section className="dash-buttons">
            <BigButtons changePage={props.changePage} />
          </section>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="">
          <WelcomeDropdown
            heading={"Welcome!"}
            paragraph={<p>Welcome to FooBar! We have a selection of premium beers for you to enjoy. Feel free to order your beers below and have a great evening!</p>}
          />

          <section className="queue dash-comp">
            <Dropdown heading={"The queue"} paragraph={<Queue data={props.data} />} />
          </section>

          <section className="popular dash-comp">
            <Dropdown heading={"Most popular beers"} paragraph={<Popular beers={props.beers} data={props.data} />} />
          </section>

          <section className="bartenders dash-comp">
            <Dropdown heading={"The bartenders"} paragraph={<Bartenders data={props.data} />} />
          </section>

          <BigButtons changePage={props.changePage} />
        </div>
        <div className="dash-comp hidden">
          <AllBeers beers={props.beers} />
        </div>
      </>
    );
  }
}
