const express = require('express');
require('dotenv').config();
const routes = require('./routes');

const app = express();

app.use("/", function(req, res, next) {
  res.set({
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET",
  });
  next();
});

// use routes defined in routes.js
app.use("/api", routes);

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
