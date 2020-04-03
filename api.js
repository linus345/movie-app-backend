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

function getMoviesBy(by, query) {
  const url = `/movie/${by}`;
  return instance.get(url, { params: query });
}

function getPopular(query) {
  return getMoviesBy("popular", query);
}

function getTop(query) {
  return getMoviesBy("top_rated", query);
}

function getNew(query) {
  return getMoviesBy("upcoming", query);
}

function getMovie(movieId) {
  const url = `/movie/${movieId}?append_to_response=videos,images,similar,credits`;
  return instance.get(url);
}

function getGenres() {
  return instance.get("/genre/movie/list");
}

function discoverMovies(params = {}) {
  return instance.get("/discover/movie", { params });
}

function getMoviesByGenreId(genreId, query = {}) {
  const params = {
    ...query,
    "with_genres": genreId,
  };
  return discoverMovies(params);
}

function searchMovies(searchQuery, query) {
  return instance.get("/search/movie", {
    params: { query: searchQuery, ...query },
  });
}

// Actor
function getActor(actorId) {
  const url = `/person/${actorId}`;
  return instance.get(url);
}

function getMoviesWithActor(actorId, query = {}) {
  const params = {
    ...query,
    "with_cast": actorId,
  };
  return discoverMovies(params);
}

// exports
exports.getPopular = getPopular;
exports.getTop = getTop;
exports.getNew = getNew;
exports.getMovie = getMovie;
exports.getGenres = getGenres;
exports.getMoviesByGenreId = getMoviesByGenreId;
exports.searchMovies = searchMovies;
exports.getActor = getActor;
exports.getMoviesWithActor = getMoviesWithActor;
