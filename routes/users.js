var express = require("express");
var router = express.Router();
var models = require("../src/models/init-models.js");
const errHandler = (err) => {
  console.error("Error: ", err);
};
require("../src/database/connection.js");
models.initModels(sequelize);
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.statusCode = 401;
  res.send("Unauthorized");
});
router.get("/token/:login/:hash", function (req, res, next) {
  var login = req.params.login;
  var hash = req.params.hash;
  console.log("login: " + login);
  console.log("hash: " + hash);
  models.Utilisateur.findOne()
    .then((user) => {
      console.log("user: " + user);
      if (user.Identifiant == login && user.Password == hash) {
        console.log("user found");
        res.statusCode = 200;
        if (user.Token == null || user.TokenTTL < new Date()) {
          user.Token = Math.random().toString(36).substring(2, 15);
          user.TokenTTL = new Date();
          user.TokenTTL.setHours(user.TokenTTL.getHours() + 1);
          user.save();
        }
        res.Json(user.Token);
      } else {
        console.log("user not found");
        res.statusCode = 401;
        res.send("Unauthorized");
      }
    })
    .catch(errHandler);
});
module.exports = router;
