const fetch = require("node-fetch");
// fetches api data from backend and extracts its json body return default if no data is found
export async function fetchRandomSerie() {
  return await fetch("http://localhost:4000/series/randomizer", {
    mode: "cors",
  })
    .then((res) => {
      if (res.status === 404) {
        return "No data found";
      } else {
        return res.json();
      }
    })
    .then((res) => {
      if (res === "No data found") {
        return res;
      } else {
        return res;
      }
    });
}
// fetches api data from backend and extracts its json body
export async function fetchRandomCinemaMovie() {
  return await fetch("http://localhost:4000/cinema-movies/randomizer", {
    mode: "cors",
  })
    .then((res) => {
      if (res.status === 404) {
        return "No data found";
      } else {
        return res.json();
      }
    })
    .then((res) => {
      if (res === "No data found") {
        return res;
      } else {
        return res;
      }
    });
}
// fetches api data from backend and extracts its json body
export async function fetchRandomClassic() {
  return await fetch("http://localhost:4000/classics/randomizer", {
    mode: "cors",
  })
    .then((res) => {
      if (res.status === 404) {
        return "No data found";
      } else {
        return res.json();
      }
    })
    .then((res) => {
      if (res === "No data found") {
        return res;
      } else {
        return res;
      }
    });
}
