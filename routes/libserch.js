var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');



router.get('/libsearch', function(req, res, next) {

    if (req.query.keyword !== null) {
        console.log(req.query.keyword);
        url = "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=1|k|a|" + encodeURI(req.query.keyword) + "&facet=false&max=65535";
        console.log(url);
        request(url, function (err, ress, html) {
            if (!err) {
                dbjson = JSON.parse(html);
                dbjson.title = "ㅗ";
                dbjson.keyword = req.query.keyword;
                console.log(dbjson.success);
                res.render('info/libserch', dbjson);
            }
        });
    } else {
        url = "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=1|k|a|"
        request(url, function (err, ress, html) {
            if (!err) {
                dbjson = JSON.parse(html);
                dbjson.title = "ㅗ";
                console.log(dbjson.success);
                res.render('info/libserch', dbjson);
            }
        });
    }
});


module.exports = router;