var express = require('express');
var router = express.Router();
var request = require('request');
const cheerio = require('cheerio');

var iconv = require('iconv-lite');

/* GET home page. */
router.get('/dormitory', function(req, res, next) {
  url = 'http://dormitory.neo-internet.co.kr/board/adm/Recipe/restaurant.php',
  options = {
    uri: url,
    headers: { "User-Agent": "KHTML, like Gecko" },
    encoding: null
  };
  strjson = '';
  request(options , function(error, response, html) {
    if(!error){
      var strContents = new Buffer(html);
      html = iconv.decode(strContents, 'EUC-KR').toString();

      var $ = cheerio.load(html);
      strjson += '{ "title" : "기숙사 생활관 식당", ';
      table = $('.wanted > tbody > tr > td').each(function(i) {
        strjson += '"food' + i + '" : "' + $(this).text() + '", ';
        // console.log($(this).text());
      });
      strjson += '"blank" : ""}';
      strjson = strjson.replace(/\n/gi, '\\r\\n');



      json = JSON.parse(strjson);
      res.render('info/dormitory',json);
    }
  });
});

module.exports = router;
