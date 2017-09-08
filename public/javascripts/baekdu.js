module.exports = function ($) {
  strjson = '{ "title" : "백두관 식당", ';
  countday = 1;
  countmenu = 1;
  $('.table.border_left.border_top_blue > tbody > tr > td > p').each(function() {
    strjson += '"baekdu' + countday + "_" + countmenu + '" : "' + $(this).text() + '", ';
    countmenu++;
    if (countmenu % 9 == 0){
      countmenu = 1;
      countday++;
    }
  });
  strjson += '"blank" : ""}';
  strjson = strjson.replace(/\n/gi, '\\r\\n');
  console.log(strjson);
  return JSON.parse(strjson);
}
