var express = require('express');
var router = express.Router();

var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var haksa = require('../public/javascripts/haksa');



router.get('/haksa', function (req, res, next) {
    var d = new Date();
    url = "http://www.jejunu.ac.kr/camp/sai/academyschedule/" + d.getFullYear();
    options = {
      uri : url,        //request options
      headers : {
        "User-Agent" : "KHTML, like Gecko",
        "encoding" : "null"
      }
    };
    request(options, function (err, response, html) {
        if (!err) {
            var load = cheerio.load(html);
            res.render('info/haksa', haksa(load));
        }


    });
});
module.exports = router;
