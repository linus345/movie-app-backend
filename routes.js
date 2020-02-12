const express = require('express');
const api = require('./api');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("home page");
});

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

module.exports = router;
