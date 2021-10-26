const Sequelize = require("sequelize");
const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:verber@127.0.0.1:5432/postgres";
const db = new Sequelize(databaseURL,{
  ssl: { rejectUnauthorized: false }
});

db.sync()
  .then(() => console.log("Database is in  Sync"))
  .catch(console.error);

module.exports = db;
