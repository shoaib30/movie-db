var express = require('express')
var routes = require('./routes')
var app = express();
var colors = require('colors');
var mongoose = require('mongoose');
colors.setTheme({
  silly: 'rainbow',
  info: 'grey',
  success: 'green',
  data: 'yellow',
  debug: 'blue',
  error: 'red'
});

mongoose.connect('mongodb://localhost/moviedb', function(err) {
    if (err) {
      console.log('Connecting to mongo'.info +':' + 'Fail'.error)
      throw err;
    }
    console.log('Connecting to mongo'.info +':' + 'Success'.success)
});

var server = app.listen(3000, function() {
    console.log("Server on:".info + "Success".success + ": port 3000".data);
});
routes(app)
app.use(express.static('public'));
