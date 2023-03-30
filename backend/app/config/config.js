import dotenv from "dotenv";
dotenv.config("../../.env");

const config = {
  HOST: process.env.HOST,
  DATABASE: process.env.DATABASE,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
  PORT:process.env.DB_PORT,
  DIALECT: process.env.DIALECT,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export default config;
