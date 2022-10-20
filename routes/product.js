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
  await models.PRODUCT_FORM.findAll({})
    .then((productForms) => {
      res.json(productForms);
    })
    .catch((err) => {
      res.status(404).send("No product forms found");
    });
});
module.exports = router;
