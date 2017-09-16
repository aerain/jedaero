var request = require('request');
var cheerio = require('cheerio');

var url = "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%84%B1&abc="

    request(url,function (err, res, html) {
        if (!err) {
            var $ = cheerio.load(html);
            console.log(html);
        }
    })
