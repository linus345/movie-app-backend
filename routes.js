const express = require('express');
const api = require('./api');
const router = express.Router();

router.get("/popular", async (req, res) => {
  try {
    const apiRes = await api.getPopular(req.query);
    res.status(apiRes.status).json(apiRes.data);
  } catch(err) {
    if(err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json(err);
    }
  }
});

router.get("/top", async (req, res) => {
  try {
    const apiRes = await api.getTop(req.query);
    res.status(apiRes.status).json(apiRes.data);
  } catch(err) {
    if(err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json(err);
    }
  }
});

router.get("/coming", async (req, res) => {
  try {
    const apiRes = await api.getNew(req.query);
    res.status(apiRes.status).json(apiRes.data);
  } catch(err) {
    if(err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json(err);
    }
  }
});

router.get("/movie/:movieId", async (req, res) => {
  try {
    const apiRes = await api.getMovie(req.params.movieId);
    res.status(apiRes.status).json(apiRes.data);
  } catch(err) {
    if(err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json(err);
    }
  }
});

router.get("/genre/movie/list", async (req, res) => {
  try {
    const apiRes = await api.getGenres();
    res.status(apiRes.status).json(apiRes.data);
  } catch(err) {
    if(err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json(err);
    }
  }
});

router.get("/genre/:genreId", async (req, res) => {
  try {
    const apiRes = await api.getMoviesByGenreId(req.params.genreId, req.query);
    res.status(apiRes.status).json(apiRes.data);
  } catch(err) {
    if(err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json(err);
    }
  }
});

router.get("/search/:searchQuery", async (req, res) => {
  try {
    const apiRes = await api.searchMovies(req.params.searchQuery, req.query);
    res.status(apiRes.status).json(apiRes.data);
  } catch(err) {
    if(err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json(err);
    }
  }
});

// actor
router.get("/person/:actorId/movies", async (req, res) => {
  try {
    const apiRes = await api.getMoviesWithActor(req.params.actorId);
    res.status(apiRes.status).json(apiRes.data);
  } catch(err) {
    if(err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json(err);
    }
  }
});

router.get("/person/:actorId", async (req, res) => {
  try {
    const apiRes = await api.getActor(req.params.actorId);
    res.status(apiRes.status).json(apiRes.data);
  } catch(err) {
    if(err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
