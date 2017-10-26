module.exports = function($) {
    var haksa = new Object();

    haksa.title = "제주대학교 학사 일정";
    haksa.month = [];

    // 학사일정의 각 월별 학사표.
    haksatable = $('.table.border_left.border_top_blue.font09 > tbody');

    haksatable.each(function(i) {
      monthObject = {
        schedule : []
      };
      monthObject["month_title"] = $(this).find()
        $(this).find('tr > td'). each(function(j) {
          day = {};
          // temp는 각각의 화이트 스페이스를 제거해낸 텍스트
          temp = $(this).text().replace(/(\s*~\s*)/gi, ' ~ ');
          temp = temp.replace(/(^\s*)|(\s*$)/g, '');
          day["haksa"] = temp;
          monthObject.schedule.push(day);
        });
      haksa.month.push(monthObject);
    });
    return haksa;
}
