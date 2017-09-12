var request = require('request');
var cheerio = require('cheerio');

var url = "http://lib.jejunu.ac.kr/#/search/si?all=1%7Ck%7Ca%7C%ED%83%95%EC%88%98%EC%9C%A1";

request(url,function (err, res, html) {

    if(!err){
        var $ = cheerio.load(html,{normalizeWhitespace : false, xmlMode : false, decodeEntities : true});


        $('script').each(function () {
            console.log('JS:%s',$(this).text());


        });
   }
    else{
        console.log('ERR: %j\t%j’,err,res.statusCode');

    }

});