var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

router.get('/libsearch', function(req, res, next) {
    url = "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?";
    viewurl= "http://lib.jejunu.ac.kr/pyxis-api/1/biblios/732900/items";
    if(req.query.keyword !== undefined) {
        url = "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k|a|" + encodeURI(req.query.keyword) + "&facet=false&max=65535";
    }
    request(url, function(err, ress, html) {
        if (!err) {
            dbjson = JSON.parse(html);
            dbjson.title = "영어공부해";


            request(viewurl, function (err, ress, html) {
                if (!err) {
                    DBjson = JSON.parse(html);
                  //  console.log(req);
                    res.render('info/libserch',dbjson);

                }
            })
        }
    });

});

module.exports = router;