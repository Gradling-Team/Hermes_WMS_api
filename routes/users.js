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



/*Get User List*/
router.get("/", async(req, res, next)=>{
  res.status(401).json('forbidden');
});
/* GET users token */
router.get("/token/:login/:hash", async (req, res, next) => {
  const login = req.params.login;
  const hash = req.params.hash;
  const user = await models.Utilisateur.findOne({
    where: { Identifiant: login },
  });
  if (user.Password === hash) {
    if (
      user.TokenTTL < Date.now() ||
      user.TokenTTL === null ||
      user.Token === null
    ) {
      const token = Math.random().toString(36).substr(2);
      const tokenTTL = Date.now() + 3600000;
      user.update({ Token: token, TokenTTL: tokenTTL });
    }
    res.json(user.Token);
  } else {
    res.send("error");
  }
});
/*check token*/
router.get("/check/:token", async (req, res, next) => {
  const token = req.params.token;
  try {
    const user = await models.Utilisateur.findOne({ where: { Token: token } });
    if (user.TokenTTL > Date.now()) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (err) {
    res.status(404).json(false);
  }
});
module.exports = router;
