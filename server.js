
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

var env = process.env.NODE_ENV || 'development';

// all environments
app.set('port', process.env.PORT || 3000);

if ('production' == env) {
    app.set('views', path.join(__dirname, './public'));
    app.use(express.static(path.join(__dirname, './public')));
} else {
    app.set('views', path.join(__dirname, './websrc'));
    app.use(express.static(path.join(__dirname, './websrc')));
}

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(require('body-parser')());

app.use(require('method-override')());

// development only
if ('development' == app.get('env')) {
  app.use(require('errorhandler')());
}

app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});