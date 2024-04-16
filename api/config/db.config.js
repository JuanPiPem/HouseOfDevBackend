const { Sequelize } = require("sequelize");

const db = new Sequelize("houseofdev", "postgres", null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
