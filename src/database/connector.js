const { Sequelize } = require("sequelize");
const models = require("../models/init-models.js");
const sequelize = new Sequelize({
  dialect: "mysql",
  database: "hermesStorage",
  host: "localhost",
  username: "root",
  password: "azerty12321",
});
sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.");
});
models.initModels(sequelize);
sequelize.sync().then(() => {
  console.log("Database & tables synced!");
});
module.exports = sequelize;
