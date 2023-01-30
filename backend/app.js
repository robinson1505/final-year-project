const express = require("express");
const myDatabase = require("./app/config/db.config");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("roeman");
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is running.......................");
});
