const Sequelize = require("sequelize");
const db = require("../db");
const Files = require("../Files/model");
const Spaces = db.define("space", {
  name: Sequelize.STRING,
  builtIn: Sequelize.STRING,
  description: Sequelize.TEXT,
  url: Sequelize.STRING
});
Files.belongsTo(Spaces);
module.exports = Spaces;
