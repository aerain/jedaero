var express = require('express');
var router = express.Router();
var request = require('request');
const cheerio = require('cheerio');

/* GET home page. */
router.get('/baekdu', function(req, res, next) {
  url = 'http://www.jejunu.ac.kr/camp/stud/foodmenu',
  strjson = '';
  request(url, function(error, response, html) {
    if(!error){
      var $ = cheerio.load(html);
      strjson += '{ "title" : "노답", ';
      table = $('.table.border_left.border_top_blue > tbody > tr > td > p').each(function(i) {
        strjson += '"food' + i + '" : "' + $(this).text() + '", ';
        // console.log($(this).text());
      });
      strjson += '"blank" : ""}';
      strjson = strjson.replace(/\n/gi, '\\r\\n');
      // console.log(strjson);
      json = JSON.parse(strjson);
      res.render('info/baekdu',json);
    }
  });
});

module.exports = router;
