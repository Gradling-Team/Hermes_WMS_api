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
router.get("/", async (req, res, next) => {
  res.status(401).json("unauthorized");
});
/* start request definitions */
router.get("/:token", async (req, res, next) => {
  console.log("token: " + req.params.token);
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
    .then((order_ticket) => {
      res.json(order_ticket);
    })
    .catch((err) => {
      res.status(404).send("No product forms found");
    });
});
/* post ticket order */
router.post("/:token", async (req, res, next) => {
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
      stop;
    });
  await models.ORDER_TICKET.create({
    DATETIME: Date.now(),
    STATUSCODE: "PENDING",
    DESTINATION: req.body.DESTINATION,
    DELIVERYDATE: req.body.DELIVERYDATE,
  })
    .then((order_ticket) => {
      res.json(order_ticket);
    })
    .catch((err) => {
      res.status(401).send("No ticket Created");
    });
});
module.exports = router;
