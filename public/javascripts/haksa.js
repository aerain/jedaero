module.exports = function ($) {

  strjson += '{ "title" : "제주대학교 학사 일정" ,';
  haksatable = $('.sub_content_list > dd > dl > dd > table');
  haksatable.find('tbody > tr > td').each(function(i) {
    temp = $(this).text().replace(/(\s*~\s*)/gi, ' ~ ');
    temp = temp.replace(/(^\s*)|(\s*$)/gi, '');
    strjson += '"haksa' + i + '" : "' + temp + '", ';
  });
  strjson += '"blank" : ""}';
  console.log(strjson);
  

  return JSON.parse(strjson);
}
