import React from "react";

export default function Popular(props) {
  const sortedBeer = props.data.taps.sort(sortAsc);

  function sortAsc(a, b) {
    if (a.level < b.level) {
      return -1;
    } else {
      return 1;
    }
  }
  // new array that will contain no duplicates
  const cleanArr = [];

  // loop through each beer to find duplicates
  sortedBeer.forEach((obj) => {
    // check if duplicated
    if (cleanArr.some((beer) => beer.beer === obj.beer)) {
      //console.log("findes");
    } else {
      // else push all non duplicates to the clean array
      // console.log("findes ikke");
      cleanArr.push(obj);
    }
  });

  // console.log(cleanArr);

  // console.log(sortedBeer);
  let popularBeers = [];

  showPopular();
  function showPopular() {
    for (let i = 0; i < 3; i++) {
      popularBeers.push(sortedBeer[i]);
    }
  }
  return (
    <>
      {popularBeers.map((beer) => {
        let beerIndex = popularBeers.findIndex((obj) => obj.beer === beer.beer);
        return (
          <div className="beer-pop">
            <p className="bold">{beerIndex + 1}. </p>
            <p>{beer.beer}</p>
          </div>
        );
      })}
    </>
  );
}
