// http get  using request 
// using twitter api

var request = require('request');
var fs = require('fs');

request('http://search.twitter.com/search.json?q=node.js', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var res = JSON.parse(body);
    res.results.forEach(function(twitt){
      console.log(twitt.text);
    });
  }
})


// stream image 
// request('http://thumbs.ifood.tv/files/u103/samosa.jpg').pipe(fs.createWriteStream('cat.png'))
