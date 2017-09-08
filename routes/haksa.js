var express = require('express');
var router = express.Router();
var request = require('request');
const cheerio = require('cheerio');
var haksa = require('../public/javascripts/haksa');


/* GET home page. */
router.get('/haksa', function(req, res, next) {
  today = new Date();
  url = 'http://www.jejunu.ac.kr/camp/sai/academyschedule/' + today.getFullYear();
  strjson = '';
  request(url, function(error, response, html) {
    if(!error){
      var $ = cheerio.load(html);


      res.render('info/haksa', haksa(load));
    }

  });



});

module.exports = router;
