import React from "react";

export default function Nav(props) {
  return (
    <nav>
      <img onClick={() => props.changePage("home")} src="foobarlogo.png" className="logo" alt="logo" />
      <ul>
        <li onClick={() => props.changePage("home")}>
          <img src="homeicon.png" className="nav-icon home" alt="home icon" />
        </li>
        <li onClick={() => props.changePage("beer")}>
          <img src="icons-03.png" className="nav-icon beer" alt="nav icon" />
        </li>
        <li onClick={() => props.changePage("buy")}>
          <img src="cart2-04.png" className="nav-icon buy" alt="cart icon" />
        </li>
      </ul>
    </nav>
  );
}
