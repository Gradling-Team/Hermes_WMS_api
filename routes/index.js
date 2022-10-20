const { json } = require("express");
var express = require("express");
const { send } = require("process");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
