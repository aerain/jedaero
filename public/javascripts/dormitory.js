module.exports = function ($) {
  strjson = '{ "title" : "기숙사 생활관 식당", ';
  countday = 0;
  countmenu = 0;
  $('.wanted > tbody > tr > td').each(function() {
    strjson += '"dormitory' + countday + '_' + countmenu + '" : "' + $(this).text() + '", ';
    countmenu++;
    if (countmenu % 6 == 0){
      countmenu = 1;
      countday++;
    }
  });
  strjson += '"blank" : ""}';
  strjson = strjson.replace(/\n/gi, '\\r\\n');
  console.log(strjson);
  return JSON.parse(strjson);
}
