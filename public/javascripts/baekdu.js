module.exports = function ($) {
  strjson = '{ "title" : "백두관 식당", ';
  countday = 1;
  countmenu = 1;
  $('.table.border_left.border_top_blue > tbody > tr > td').each(function() {
    TempText = $(this).text()
    TempText = TempText.substring(1);
    TempText = TempText.trim();

    strjson += '"baekdu' + countday + "_" + countmenu + '" : "' + TempText + '", ';
    countmenu++;
    if (countmenu % 14 === 0){
      countmenu = 1;
      countday++;
    }
  });
  strjson += '"blank" : ""}';
  strjson = strjson.replace(/\n/gi, '\\r\\n');
  console.log(JSON.parse(strjson));
  return JSON.parse(strjson);
}
