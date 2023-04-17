const express = require("express");
const routes = express();
const controller = require("../controller/sum");

routes.get("/somar/:num1/:num2", controller.sum);

module.exports = routes;
