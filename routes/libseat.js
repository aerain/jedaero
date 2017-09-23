var express = require('express');
var router = express.Router();

var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var libseat = require('../public/javascripts/libseat');



router.get('/libseat', function (req, res, next) {
    options = {
      uri : "http://203.253.194.57/domian5.asp",        //request options
      encoding : null,
      headers : {
        "User-Agent" : "KHTML, like Gecko",
        "encoding" : "null"
      }
    };
    request(options, function (err, response, html) {
        if (!err) {
            var strContents = new Buffer(html);
            html = iconv.decode(strContents, 'EUC-KR').toString();// iconv options
            var load = cheerio.load(html);
            res.render('info/libseat', libseat(load));
        }


    });
});
module.exports = router;
