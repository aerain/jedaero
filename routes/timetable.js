var express = require('express');
var router = express.Router();

var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

/* GET home page. */
router.post('/timetable', function(req, res, next) {
 
  options = {
    uri: 'https://dreamy.jejunu.ac.kr/susj/su/sta_su_6170q.jejunu',
  headers: {
      "User-Agent": "KHTML, like Gecko",
      "Cookie": "JSESSIONID=dRqBSG7yk6khoOtMP6Ldg1kOzwO45S6L8aqIFMHSUc3KaBJ39iQMNYCPqYKvpDX9.jnuwas2_servlet_engine1",
      "Connection" : "keep-alive",
      "Content-Length" : "87",
      "Referer": "https://dreamy.jejunu.ac.kr/susj/su/sta_su_6170q.jejunu",
      
      
  },
    formData:{
      "mode": "doListTimetable",
      "curri_year": "2017",
      "term_db": "20",
      "su_dt": "20170920",
      "student_no": "2014108205",
      "_":""
      },
    encoding: null
  };

  request("http://www.naver.com", function(err, res, html) {
    if (!err){
      var $ = cheerio.load(html);
      console.log(html);
      res.render('dreamy/timetable', { title: '제주대학교 필수 어플 - 제대로 가자' });
    }
  });

});

module.exports = router;
