var express = require("express");
const sequelize = require("../src/database/connector.js");
const Sequelize = require("sequelize");
var router = express.Router();
var models = require("../src/models/init-models.js")(
  sequelize,
  Sequelize.DataTypes
);
const errHandler = (err) => {
  console.error("Error: ", err);
};


router.get("/", async(req, res, next)=>{
  res.status(401).json("unauthorized");
});
/* start request definitions */
router.get("/:token", async (req, res, next) => {
  await models.Utilisateur.findOne({
    where: {
      Token: req.params.token,
    },
  })
    .then((user) => {
      if (user.TokenTTL < Date.now()) {
        res.status(401).send("Token expired");
      }
    })
    .catch((err) => {
      res.status(404).send("Token not found");
    });
  await models.ENTITY.findAll({})
    .then((entity) => {
      res.json(entity);
    })
    .catch((err) => {
      res.status(404).send("No product forms found");
    });
});

router.get("/:token/:id", async (req, res, next) => {
  await models.Utilisateur.findOne({
    where: {
      Token: req.params.token,
    },
  })
    .then((user) => {
      if (user.TokenTTL < Date.now()) {
        res.status(401).json("Token expired");
      }
    })
    .catch((err) => {
      res.status(404).json("Token not found");
    });
  await models.ENTITY.findAll({
    where: {
      Name: req.params.id,
    },
  })
    .then((entity) => {
      res.json(entity);
    })
    .catch((err) => {
      res.status(404).send("No entity found");
    });
});

module.exports = router;