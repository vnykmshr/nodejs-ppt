var express = require('express');
var http = require('http');
var routes = require('./routes');
var environment = process.env.NODE_ENV || 'development';
var config = require('./config/' + environment + '.js');
var port = process.env.PORT || config.port;
config.interval = config.interval * 1000; //we want seconds

var app = module.exports = express();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('config', config);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// environments
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
require('./routes/site')(app);

http.createServer(app).listen(app.get('port'), function () {
  console.log("Dashboards server listening on port %d in %s mode", port, app.settings.env);
});
