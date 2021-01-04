import React from "react";

export default function Queue(props) {
  const queueLength = props.data.queue.length;
  const servingLength = props.data.serving.length;

  return (
    <>
      <h3>Currently serving</h3>
      <p className="bold" key={"servingLength"}>
        {servingLength}
      </p>
      <div className="serving-container">
        {props.data.serving.map((person) => {
          return (
            <figure>
              <img className="serving-rocket" src="serving-rocket.png" alt="serving rocket" />
              <figcaption>Nr. {person.id}</figcaption>
            </figure>
          );
        })}
      </div>
      <div className="queue-container">
        <h3>Customers in line</h3>
        <p className="bold" key={"queueLength"}>
          {queueLength}
        </p>

        <div className="rocket-container">
          {props.data.queue.map((person) => {
            return <img className="queue-rocket" src="queue-rocket.png" alt="queue rocket" />;
          })}
        </div>
      </div>
    </>
  );
}
