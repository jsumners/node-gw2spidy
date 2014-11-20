'use strict';

var client = require('../gw2spidy.js');

// Get a list of items that contain the term 'red dye' in their name
client.items.search('red dye', function(err, response) {
  console.log('item search result:');
  if (err) {
    console.log('error => ', err);
  } else {
    console.log(response.results);
  }
});

// Get a single item's information
client.items.get(49192, function(err, response) {
  console.log('get single item result:');
  if (err) {
    console.log('error => ', err);
  } else {
    console.log(response.result);
  }
});