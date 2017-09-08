var express = require('express');
var router = express.Router();
var request = require('request');
const cheerio = require('cheerio');
var baekdu = require('../public/javascripts/baekdu');

/* GET home page. */
router.get('/baekdu', function(req, res, next) {
  url = 'http://www.jejunu.ac.kr/camp/stud/foodmenu';
  request(url, function(error, response, html) {
    if(!error){
      var load = cheerio.load(html);
      res.render('info/baekdu',baekdu(load));
    }
  });
});

module.exports = router;
