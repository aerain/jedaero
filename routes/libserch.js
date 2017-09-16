var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

var url = "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=1|k|a|%EC%86%8C%EB%82%98%EA%B8%B0&facet=false&max=120";

var options = {
    uri : url,
    encoding : null
};
request(options,function (err, res, html) {
    if (!err) {
        var strContents = new Buffer(html);
        html = iconv.decode(strContents, 'utf-8').toString();
        var $ = cheerio.load(html);

        dbjson = JSON.parse(html);

        console.log(dbjson.data.list[1].titleStatement);
        // res.render('info/libserch', dbjson);
        // date = $('titleStatment').each(function () {
        // console.log($(this).text());

        //});

    }
})