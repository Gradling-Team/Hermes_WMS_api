const { json } = require("express");
var express = require("express");
const { send } = require("process");
var router = express.Router();

/*Database "connection"*/
var Data = JSON.parse(require("fs").readFileSync("testData/Data.json", "utf8"));
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/*EP Get requests*/
router.get("/EP", function (req, res, next) {
  res.json(Data.products);
});
router.get("/EP/:id", function (req, res, next) {
  res.json(Data.products.filter((x) => x.id == req.params.id));
});
/* lots Get requests*/
router.get("/lots", function (req, res, next) {
  res.json(Data.lots);
});
router.get("/lots/:id", function (req, res, next) {
  res.json(Data.lots.filter((x) => x.id == req.params.id));
});
/* productData Get requests */
router.get("/productData", function (req, res, next) {
  res.json(Data.data);
});
router.get("/productData/:id", function (req, res, next) {
  res.json(Data.data.filter((x) => x.id == req.params.id));
});

/*Post_requests*/
/*EP*/
router.post("/EP", function (req, res, next) {
  Data.products.push(req.body);
  res.json(Data.products);

  require("fs").writeFileSync(
    "testData/Data.json",
    JSON.stringify(Data),
    "utf8"
  );
});
/*lots*/
router.post("/lots", function (req, res, next) {
  Data.lots.push(req.body);
  res.json(Data.lots);

  require("fs").writeFileSync(
    "testData/Data.json",
    JSON.stringify(Data),
    "utf8"
  );
});
/*productData*/
router.post("/productData", function (req, res, next) {
  Data.data.push(req.body);
  res.json(Data.data);

  require("fs").writeFileSync(
    "testData/Data.json",
    JSON.stringify(Data),
    "utf8"
  );
});

module.exports = router;
