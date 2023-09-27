const express = require("express");
const routes = express.Router();
const mainRouteMiddleware = require("../middlewares/mainRouteMiddleware");

routes.get("/", (req, res) => {
    res.send("This is my main route!");
  });
  
  module.exports = routes;
