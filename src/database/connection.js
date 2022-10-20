//setting up the connection to the database
const Sequelize = require('sequelize');
const sequelize = new Sequelize('hermesStorage', 'root', 'azerty12321', {
    host: 'localhost',
    dialect: 'mysql',
    OperatorAliases: false,
});
module.exports = sequelize;
global.sequelize = sequelize;
