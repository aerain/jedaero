var express = require('express');
var router = express.Router();
var request = require('request');
const cheerio = require('cheerio');
var dormitory = require('../public/javascripts/dormitory');
var iconv = require('iconv-lite');
/* GET home page. */
router.get('/dormitory', function(req, res, next) {
  options = {
    uri: 'http://dormitory.neo-internet.co.kr/board/adm/Recipe/restaurant.php',
    headers: { "User-Agent": "KHTML, like Gecko" },
    encoding: null,
  };
  request(options , function(error, response, html) {
    if(!error){
      var strContents = new Buffer(html);
      html = iconv.decode(strContents, 'EUC-KR').toString();
      var load = cheerio.load(html);
      res.render('info/dormitory',dormitory(load));
    }
  });
});

module.exports = router;
