const Sequelize = require("sequelize");
require("dotenv").config();

//Creo la db bajo el nombre de 'movie_code' y la exporto.
const db = new Sequelize(process.env.DB_NAME, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'postgres',
  logging: false,
});

module.exports = db