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
  await models.PRODUCT_FORM.findAll({})
    .then((productForms) => {
      res.json(productForms);
    })
    .catch((err) => {
      res.status(404).send("No product forms found");
    });
});
/* get product form by name */
router.get("/:token/:name", async (req, res, next) => {
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
  await models.PRODUCT_FORM.findAll({
    where: {
      Nom: req.params.name,
    },
  })
    .then((productForm) => {
      res.json(productForm);
    })
    .catch((err) => {
      res.status(404).send("No product form found");
    });
});
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
    });
  await models.PRODUCT_FORM.create({
   Nom:req.body.Nom,
   COST:parseInt(req.body.COST),
   PRICE:parseInt(req.body.PRICE),
  })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.status(401).send("No product Created");
    });
});
module.exports = router;
