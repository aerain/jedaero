var request = require('request');
var cheerio = require('cheerio');

var url = "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%84%B1&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%84%B4&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%84%B7&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%84%B9&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%85%81&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%85%82&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%85%85&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%85%87&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%85%88&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%85%8A&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%85%8B&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%85%8C&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%85%8C&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%85%8E&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%84%B2&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%84%B8&abc="
            +"http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C%E3%85%86&abc=";
request(url,function (err, res, html) {
    if (!err) {
        var $ = cheerio.load(html);
        console.log(html);
        // date = $('titleStatment').each(function () {
        // console.log($(this).text());

        //});

    }
})