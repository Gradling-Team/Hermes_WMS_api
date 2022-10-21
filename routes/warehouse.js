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
  await models.ORDER_TICKET.findAll({})
    .then((warehouse) => {
      res.json(warehouse);
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
    await models.ORDER_TICKET.findAll({
      where: {
        ID_ORDER: req.params.id,
      },
    })
    .then((order_ticket) => {
      res.json(order_ticket);
    })
    .catch((err) => {
      res.status(404).send("No order found");
    });
});
module.exports = router;