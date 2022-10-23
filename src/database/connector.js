const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "mysql",
  database: "hermesStorage",
  host: "localhost",
  username: "root",
  password: "azerty12321",
});
const models = require("../models/init-models.js");
sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.");
});
models.initModels(sequelize);
sequelize.sync().then(() => { // force reset all table to remove in production env
  console.log("Database & tables synced!");
});
//mokdata setup
module.exports = sequelize;
