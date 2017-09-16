var request = require('request');
var cheerio = require('cheerio');

var url =

request(url,function (err, res, html) {
    if (!err) {
        var $ = cheerio.load(html);
        console.log(html);
        // date = $('titleStatment').each(function () {
        // console.log($(this).text());

        //});

    }
})