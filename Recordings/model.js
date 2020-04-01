const Sequelize = require("sequelize");
const db = require("../db");

const Recordings = db.define("recording", {
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  description: Sequelize.STRING,
  url: Sequelize.STRING
});

module.exports = Recordings;
