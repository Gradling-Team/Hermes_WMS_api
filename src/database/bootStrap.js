var express = require("express");
const sequelize = require("./connector.js");
const Sequelize = require("sequelize");
var router = express.Router();
var models = require("../models/init-models.js")(
    sequelize,
    Sequelize.DataTypes
);
const errHandler = (err) => {
    console.error("Error: ", err);
};

models.Utilisateur.findOrCreate({
    where: {//object containing fields to found
        Identifiant: 'test',
        Password: 'test',
        },
        defaults: {//object containing fields and values to apply
            Identifiant: 'test',
            Password: 'test',
        }
        }).then(function(){//run your calllback here
          console.log("User synced/add");
        }).catch(err => {
          res.status(500).send("Error -> " + err);
        }
);
