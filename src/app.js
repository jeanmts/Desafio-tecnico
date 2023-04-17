const express = require("express");
const app = express();
const routes = require("./router/routes");

app.use(express.json());

app.use(routes);

app.listen(3000);
module.exports = app;
