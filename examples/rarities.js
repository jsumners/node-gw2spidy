'use strict';

var client = require('../gw2spidy.js');
client.rarities.get(function(err, response) {
  if (err) {
    console.log('error => ', err);
  } else {
    console.log(response.results);
  }
});