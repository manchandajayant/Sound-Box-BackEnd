const Sequelize = require("sequelize");
const db = require("../db");

const Files = db.define("file", {
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  description: Sequelize.STRING,
  url: Sequelize.STRING,
});

module.exports = Files;
