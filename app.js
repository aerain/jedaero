var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var baekdu = require('./routes/baekdu');
var dormitory = require('./routes/dormitory');
var haksa = require('./routes/haksa');
var libseat = require('./routes/libseat');
var libserch = require('./routes/libserch');
var timetable = require('./routes/timetable');
var libdetail = require('./routes/libdetail');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.get('/schoolfood', baekdu);
app.get('/dormitory', dormitory);
app.get('/haksa', haksa);
app.get('/libsearch', libserch);
app.get('/timetable', timetable);
app.get('/libseat', libseat);
app.get('/libdetail', libdetail);
app.get('/version', function(req, res) {
    res.render('version', { "title": "제대로 버전" });
});
app.get('/libreform', function(req, res) {
    res.render('info/libreform', { "title": "도서 검색" });
});
app.get('/frame', function(req,res) {
    res.render('frame', {"title": "틀"});
});
app.get('/food_sort', function(req,res) {
    res.render('info/food_sort', {"title": "뭐먹을까 페이지"});
});
app.get('/shuttlebus', function(req,res) {
    res.render('info/shuttlebus', {"title": "순환버스"});
});
app.get('/shuttlebus2', function(req,res) {
    res.render('info/bussoyoung', {"title": "순환버스"});
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// app.listen();

module.exports = app;
