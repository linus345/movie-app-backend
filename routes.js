const express = require('express');
const api = require('./api');
const router = express.Router();

router.get("/popular", async (req, res) => {
  try {
    const apiRes = await api.getPopular();
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
    const apiRes = await api.getTop();
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
    const apiRes = await api.getNew();
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

module.exports = router;
