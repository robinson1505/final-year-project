const dotenv = require("dotenv");
dotenv.config("../../.env");

module.exports = {
  HOST: process.env.HOST,
  DATABASE: process.env.DATABASE,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
 DIALECT: process.env.DIALECT,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

