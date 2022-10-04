const Sequelize = require("sequelize");

//Creo la db bajo el nombre de 'movie_code' y la exporto.
const db = new Sequelize("movie_code", "yami", "7vxjvncSilaGRjd53IsEpGtdfyrlR1XU", {
  host: 'dpg-ccu4gel3t398codkcou0-a',
  dialect: 'postgres',
  logging: false,
});

module.exports = db