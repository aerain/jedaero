module.exports = function ($) {
  strjson += '{ "title" : "제주대학교 학사 일정" ,';

  haksatable = $('.table.border_left.border_top_blue.font09 > tbody');

  haksatable.each(function(i) {
    strjson += ' "month' + (i + 1)+ '" : {';

    $(this).find('tr > td').each(function (j) {
      temp = $(this).text().replace(/(\s*~\s*)/gi, ' ~ ');
      temp = temp.replace(/(^\s*)|(\s*$)/gi, '');
      strjson += '"haksa' + (j + 1) + '" : "' + temp + '", ';
    })
    strjson += '"bla" : ""}, '
  });
  // haksatable.find('tbody > tr > td').each(function(i) {
  //   temp = $(this).text().replace(/(\s*~\s*)/gi, ' ~ ');
  //   temp = temp.replace(/(^\s*)|(\s*$)/gi, '');
  //   strjson += '"haksa' + i + '" : "' + temp + '", ';
  // });
  strjson += '"blank" : ""}';
  console.log(strjson);

  return JSON.parse(strjson);
}
