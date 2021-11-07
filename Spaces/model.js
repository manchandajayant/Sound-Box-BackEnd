const Sequelize = require("sequelize");
const db = require("../db");
const Files = require("../Files/model");
const Recordings = require("../Recordings/model");
const User = require("../Users/model");
const Spaces = db.define("space", {
  name: Sequelize.STRING,
  builtIn: Sequelize.STRING,
  description: Sequelize.TEXT,
  url: Sequelize.STRING,
  latitude: Sequelize.FLOAT,
  longitude: Sequelize.FLOAT,
});
Files.belongsTo(Spaces,{ constraints: false });
Spaces.hasOne(Files);
Recordings.belongsTo(Spaces,{ constraints: false });
Recordings.belongsTo(User);
module.exports = Spaces;
