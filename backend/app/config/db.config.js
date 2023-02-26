const { Sequelize } = require("sequelize");
const config = require("./config");

console.log(config.PASSWORD);
//? Create database connection
const db = new Sequelize(
  config.DATABASE,
  config.USERNAME,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.DIALECT
  }
);

// db.sync({alter:true})
// ? CHECK FOR CONNECTION
db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => console.error("Unable to connect to the database:", err));


module.exports = db;
