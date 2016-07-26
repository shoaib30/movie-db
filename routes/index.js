var express = require('express');
var actors = require('./actors.js');
module.exports = function(app) {
  actors(app)
}
