module.exports = function(app){
  app.get('/js/foo.js', function(req, res) {
    res.header('Content-Type', 'text/javascript');
    res.send("var config = " + JSON.stringify(app.settings.config));
  });

  app.get('/', function(req, res) {
    console.log('1');
    res.redirect('/index.html');
  });
};
