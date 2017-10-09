module.exports = function($) {
    var haksa = new Object();

    haksa.title = "제주대학교 학사 일정";

    // 학사일정의 각 월별 학사표.
    haksatable = $('.table.border_left.border_top_blue.font09 > tbody');

    haksatable.each(function(i) {
      monthObject = {};
        $(this).find('tr > td'). each(function(j) {

          // temp는 각각의 화이트 스페이스를 제거해낸 텍스트
          temp = $(this).text().replace(/(\s*~\s*)/gi, ' ~ ');
          temp = temp.replace(/(^\s*)|(\s*$)/g, '');

          
          monthObject["haksa" + (j + 1)] = temp;
        });
      console.log(monthObject);
    });


    /*haksatable = $('.table.border_left.border_top_blue.font09 > tbody');
    haksatable.each(function(i) {
        strjson += ' "month' + (i + 1) + '" : {';

        $(this).find('tr > td').each(function(j) {
            temp = $(this).text().replace(/(\s*~\s*)/gi, ' ~ ');
            temp = temp.replace(/(^\s*)|(\s*$)/gi, '');
            strjson += '"haksa' + (j + 1) + '" : "' + temp + '", ';
        })
        strjson += '"bla" : ""}, '
    });
    strjson += '"blank" : ""}';
    console.log(strjson);*/

    console.log(JSON.stringify(haksa));
    return haksa;
}
