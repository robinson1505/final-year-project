import { Sequelize } from "sequelize";
import config  from "./config.js";


//? Create database connection
const sequelize = new Sequelize(
  config.DATABASE,
  config.USERNAME,
  config.PASSWORD,


  {
    host: config.HOST,
    dialect: config.DIALECT
  }
);

  // sequelize.sync({ alter: true });
// ? CHECK FOR CONNECTION
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => console.error("Unable to connect to the database:", err));

export default sequelize;
