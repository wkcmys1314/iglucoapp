var express = require('express');
var ejs = require('ejs');
// var forceSSL = require('express-force-ssl');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var gdh = require('./routes/gdh');
var log = require('./routes/log');
var neura = require('./routes/neura');
var test = require('./routes/test');
var file = require('./routes/file');
var token = require('./routes/token');
var sms = require('./routes/sms');
var email = require('./routes/email');
var bottle = require('./routes/bottle');

var app = express();
// process.env.PORT = 3001;


/*app.set('httpsport', 3001);
var https = require('https');
var fs = require('fs');
var options = {
  // key: fs.readFileSync('./key/server-key.pem'),
  // ca: [fs.readFileSync('./key/ca-cert.pem')],
  // cert: fs.readFileSync('./key/server-cert.pem')
  key: fs.readFileSync('./key/Private.key'),
  cert: fs.readFileSync('./key/ihealthchina.pem')
};
var httpsServer = https.createServer(options, app);
httpsServer.listen(app.get('httpsport'), function() {
    console.log("https启动正常");
});*/


// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', gdh);
app.use('/', log);
app.use('/', neura);
app.use('/', test);
app.use('/', file);
app.use('/', token);
app.use('/', sms);
app.use('/', email);
app.use('/', bottle);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message + "<br />" + err);
    /*res.render('error', {
      message: err.message,
      error: err
    });*/
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  res.send(err.message);
  /*res.render('error', {
    message: err.message,
    error: {}
  });*/
});
// git测试

module.exports = app;
