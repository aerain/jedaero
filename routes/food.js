var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/food', function(req, res, next) {
  var foodjson;
  list = req.query.list;

  if (list === "hansik") {
    foodjson = require('../public/json/hansik.json');
    foodjson.title = "한식";
  } else if (list === "chicken") {
    foodjson = require('../public/json/chicken.json');
    foodjson.title = "치킨";
  } else if (list === "gansik") {
    foodjson = require('../public/json/gansik.json');
    foodjson.title = "간식";
  } else if (list === "etc") {
    foodjson = require('../public/json/etc.json');
    foodjson.title = "중•일•양식";
  } else {
    foodjson = {title: '제주대학교 필수 어플 - 제대로 가자'};
  }
    res.render('info/food/food', foodjson);
});

module.exports = router;
