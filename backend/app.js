const express = require("express");
const app = express();
const routes = require("./app/router/router");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
app.listen(port, () => {
  console.log("Server is running.......................");
});
