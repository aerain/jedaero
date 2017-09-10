module.exports = function ($) {
    strjson = '{ "title" : " 도서관 좌석", ';

    date = $('table').eq(1).find('tr').each(function (tr){
        $(this).find('td').each(function(td){
            strjson +='"table' + tr + "_" + td + '" : "' + $(this).text() + '", ';
        });
    });
    strjson += '"blank" : ""}';
    console.log(strjson);
    return JSON.parse(strjson);
}
