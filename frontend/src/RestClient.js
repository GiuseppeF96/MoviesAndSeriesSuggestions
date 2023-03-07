const fetch = require("node-fetch");
// fetches api data from backend and extracts its json body
export async function fetchRandomSerie() {
  return await fetch("http://localhost:4000/series/randomizer", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
// fetches api data from backend and extracts its json body
export async function fetchRandomCinemaMovie() {
  return await fetch("http://localhost:4000/cinema-movies/randomizer", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
// fetches api data from backend and extracts its json body
export async function fetchRandomClassic() {
  return await fetch("http://localhost:4000/classics/randomizer", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
