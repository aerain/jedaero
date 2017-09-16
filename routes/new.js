var iconv = require('iconv-lite');

var asc = "%ED%82%A4%EB%B3%B4%EB%93%9C";

var strContents = new Buffer(asc);

date = iconv.decode(strContents,"utf-8").toString();

console.log(date);