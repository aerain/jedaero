var express = require('express');
var router = express.Router();

var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');


var options = {
    // uri : "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=1|k|a|%EC%86%8C%EB%82%98%EA%B8%B0&facet=false&max=120",
    uri : "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=1|k|a|%EC%86%8C%EB%82%98%EA%B8%B0&facet=false&max=65535",
    encoding : null,

};

router.get('/libserch', function(req,res,next){
    request(options,function (err, ress, html) {
    if (!err) {
        var strContents = new Buffer(html);
        html = iconv.decode(strContents, 'utf-8').toString();

        dbjson = JSON.parse(html);
        dbjson.title = "영어공부해";
        console.log(html);
        res.render('info/libserch', dbjson);


        // res.render('info/libserch', dbjson);
        // date = $('titleStatment').each(function () {
        // console.log($(this).text());

        //});


    }
    });
})

module.exports = router;