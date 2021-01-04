export function checkInfo(callback) {
  fetch("https://foobar-exam-2020.herokuapp.com/")
    .then((e) => e.json())
    .then((data) => callback(data));
}

export function checkBeers(callback) {
  fetch("https://foobar-exam-2020.herokuapp.com/beertypes")
    .then((e) => e.json())
    .then((data) => callback(data));
}

export function post(payload, callback) {
  fetch("https://foobar-exam-2020.herokuapp.com/order", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  })
    .then((e) => e.json())
    .then((data) => {
      callback(data);
    });
}

export function checkPrice(callback) {
  fetch("beerprices.json")
    .then((e) => e.json())
    .then((prices) => callback(prices));
}
