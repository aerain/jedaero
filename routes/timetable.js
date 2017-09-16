var express = require('express');
var router = express.Router();

var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

/* GET home page. */
router.get('/timetable', function(req, res, next) {
  cookiestring = "JSESSIONID=UpRwLvUaBw33YXnr9hGYGA8X3gyFgFaCFAlSPL8Xwzf7ThK79IpRVhEEj9X6Tx7G.jnuwas1_servlet_engine1; expires=Session"
  options = {
    uri: 'https://dreamy.jejunu.ac.kr/susj/su/sta_su_6170q.jejunu',
    headers: { "User-Agent": "KHTML, like Gecko" },
    encoding: null
  };

  request(url, function(err, res, html) {
    if (!err){
      var $ = cheerio.load(html);
      console.log(html);
      res.render('dreamy/timetable', { title: '제주대학교 필수 어플 - 제대로 가자' });
    }
  });

});

module.exports = router;
