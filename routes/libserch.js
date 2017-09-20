var express = require('express');
var router = express.Router();

var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');


//var options = {
    // uri : "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=1|k|a|%EC%86%8C%EB%82%98%EA%B8%B0&facet=false&max=120",
    url = "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=1|k|a|%EC%86%8C%EB%82%98%EA%B8%B0&facet=false&max=65535";
   // encoding : null,

//};

router.get('/libserch', function(req,res,next){
    request(url,function (err, ress, html) {
    if (!err) {

        dbjson = html;

        dbjson.title = "영어공부해";
        console.log(dbjson);

        res.render('info/libserch', dbjson);


        // res.render('info/libserch', dbjson);
        // date = $('titleStatment').each(function () {
        // console.log($(this).text());

        //});


    }
    });
})

module.exports = router;