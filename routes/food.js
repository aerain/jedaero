var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/food', function(req, res, next) {
  var foodjson;
  list = req.query.list;

  if (list === "hansik") {
    foodjson:GETJSON = new GETJSON("../public/json/hansik.json");
  } else if (list === "chicken") {

  } else if (list === "gansik") {

  } else if (list === "etc") {

  } else {
    foodjson = {title: '제주대학교 필수 어플 - 제대로 가자'};
  }
    res.render('info/food/food', foodjson);
});

module.exports = router;
