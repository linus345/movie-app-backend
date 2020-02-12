const axios = require('axios');
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

// hardcode configuration details for now
// TODO get configuration dynamically from api and cache it for a few days
const base_url = "https://image.tmdb.org/t/p/";

function getMoviesBy(by) {
  const url = `/movie/${by}`;
  return instance.get(url);
}

function getPopular() {
  return getMoviesBy("popular");
}

function getTop() {
  return getMoviesBy("top_rated");
}

function getNew() {
  return getMoviesBy("upcoming");
}

exports.getPopular = getPopular;
exports.getTop = getTop;
exports.getNew = getNew;

