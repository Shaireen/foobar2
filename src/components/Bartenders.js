import React from "react";

export default function Bartenders(props) {
  return (
    <div className="bartenders-container">
      {props.data.bartenders.map((person) => {
        return (
          <figure className="astronaut-container">
            {person.name === "Peter" ? (
              <img className="astronaut" src={person.status === "WORKING" ? "astrpurple.gif" : "astr3-05.png"} alt="bartender" />
            ) : (
              ""
            )}
            {person.name === "Dannie" ? (
              <img className="astronaut" src={person.status === "WORKING" ? "astrpink.gif" : "pinkastr-05.png"} alt="bartender" />
            ) : (
              ""
            )}
            {person.name === "Jonas" ? (
              <img className="astronaut" src={person.status === "WORKING" ? "astrtr.gif" : "astr1-05.png"} alt="bartender" />
            ) : (
              ""
            )}
            <figcaption>{person.name}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
