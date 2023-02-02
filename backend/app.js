const express = require("express");
const myDatabase = require("./app/config/db.config");
const app = express();
const routes = require("./app/router/router");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
app.listen(port, () => {
  console.log("Server is running.......................");
});
