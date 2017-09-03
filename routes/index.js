var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '제주대학교 필수 어플 - 제대로 가자' });
});

module.exports = router;
