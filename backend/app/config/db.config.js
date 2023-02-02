const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config("../../.env");

//? Create database connection
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  socketPath: process.env.SOCKETPATH,
});


// ? CHECK FOR CONNECTION
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MYSQL Connected..............");
  }
});

module.exports = db;
