var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

var url = "%EC%86%8C%EB%82%98%EA%B8%B0";

var options = {
    uri : url,
    encoding : null
};
request(options,function (err, res, html) {
    if (!err) {
        var strContents = new Buffer(html);
        html = iconv.decode(strContents, 'utf-8').toString();
        var $ = cheerio.load(html);
        console.log(html);
        // date = $('titleStatment').each(function () {
        // console.log($(this).text());

        //});

    }
})