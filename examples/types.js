'use strict';

var client = require('../gw2spidy.js');
client.types.get(function(err, obj) {
  if (err) {
    console.log('error => ', err);
  } else {
    console.log(obj.results);
  }
});