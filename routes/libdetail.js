var express = require('express');
var router = express.Router();

const cheerio = require('cheerio');
var request = require('request');
/* GET home page. */


router.get('/libdetail', function(req, res, next) {
    search = req.query.id;
    detailjson = {};

    url = "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search";
    viewurl= "http://lib.jejunu.ac.kr/pyxis-api/1/biblios/732900/items";
  //  console.log(search)
    if(url !== undefined) {
        url = "http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k|a|" + encodeURI(req.query.keyword) + "&facet=false&max=65535";
    }

    request(url, function(err, response, html) {
        if(!err) {
            bookjson = JSON.parse(html);
            for (i = 0; i < bookjson.data.list.length; i++) {

                if (bookjson.data.list[i].id == req.query.id) {
                    detailjson["title"] = bookjson.data.list[i].titleStatement;
                    detailjson["type"] = bookjson.data.list[i].biblioType.name;
                    detailjson["author"] = bookjson.data.list[i].author;
                    detailjson["publish"] = bookjson.data.list[i].publication;

                    if (JSON.stringify(bookjson.data.list[i].branchVolumes !== "[]")) {
                        detailjson["branch"] = bookjson.data.list[i].branchVolumes[0];
                    }
                    break;
                }
            }
           // console.log(detailjson);
        }
        request(viewurl,function (err, ress, html) {
            if(!err){
                Bookjson = JSON.parse(html);
                for (i=0; i < Bookjson.data[detailjson.branch.id].length;i++) {

                }

                  //  console.log(twodetailjson);


                console.log(Bookjson);
                res.render('info/libdetail', {
                    prevbook : detailjson,
                    bookdetail : Bookjson
                });

            }
        });
    });


});

module.exports = router;
