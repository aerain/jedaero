var express = require('express');
var router = express.Router();

var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var encode = require('../public/javascripts/encode');


function dreamyLogin(id, pw, callback){
    var next = '';
    var aurl = "https://dreamy.jejunu.ac.kr/frame/sysUser.do?next=" + next;
    var cookieJar = request.jar();
    var option = {
        url: aurl,
        jar: cookieJar,
        form:{
            tmpu:encode(id),
            tmpw:encode(pw),
            mobile:'',
            userid:'',
            password:'',
            z:'N'
        },
        followAllRedirects:true,
        strictSSL:false
    };
    request.post(option, function(err,httpResponse,body){
            var cookieString = cookieJar.getCookieString(aurl);
            callback(err, cookieString);
            console.log("[DreamyLogin]Cookie:"+cookieString);
            console.log("[DreamyLogin]body:"+body);
    });
}

function dreamyLoginTest(id, pw, callback){
    var next = '';
    var aurl = "https://dreamy.jejunu.ac.kr/frame/sysUser.do?next=" + next;
    var cookieJar = request.jar();
    var option = {
        url: aurl,
        jar: cookieJar,
        headers: {
            "Connection" : "keep-alive",
            "Cache-Control" : "max-age=0"
        },
        form:{
            tmpu:encode(id),
            tmpw:encode(pw),
            mobile:'',
            userid:'',
            password:'',
            z:'N'
        },
        followAllRedirects:true,
        strictSSL:false
    };
    request.post(option, function(err,httpResponse,body){
            var cookieString = cookieJar.getCookieString(aurl);
            callback(err, httpResponse.headers);
            console.log("[DreamyLogin]Cookie:"+cookieString);
    });
}
/* GET home page. */
router.get('/timetable', function(req, res, next) {

    dreamyLoginTest("2014108205", 'Comka5857ei_', function (err, header) {
        if(!err){
            
            options = {
                uri: 'https://dreamy.jejunu.ac.kr/susj/su/sta_su_6170q.jejunu',
                headers: header,
                formData:{
                    "mode": "doListTimetable",
                    "curri_year": "2017",
                    "term_db": "20",
                    "su_dt": "20170920",
                    "student_no": "2014108205",
                    "_":""
                },
                encoding: 'utf-8',
                strictSSL:false
            };
        
            request(options, function(err, response, html) {
                if (!err){
                  var $ = cheerio.load(html);
                  console.log(html);
                  res.render('dreamy/timetable', { title: '제주대학교 필수 어플 - 제대로 가자' });
                } else {
                    console.log("노답");
                }
            });
        }else{
            console.log(err);
        }
    });

});

module.exports = router;
