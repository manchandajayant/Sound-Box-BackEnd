const Sequelize = require("sequelize");
const db = require("../db");

const Files = db.define("file", {
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  description: Sequelize.STRING,
  spaceId: Sequelize.INTEGER,
});

module.exports = Files;
