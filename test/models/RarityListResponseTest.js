'use strict';

var assert = require('assert'),
    RarityListResponse = function(){};

var json = '{"results":[{"id":0,"name":"Junk"},{"id":1,"name":"Common"},' +
  '{"id":2,"name":"Fine"},{"id":3,"name":"Masterwork"},{"id":4,"name":"Rare"}' +
  ',{"id":5,"name":"Exotic"},{"id":6,"name":"Ascended"},{"id":7,"name":"Legendary"}]}';

var batch = {
  'A RarityListResponse': {
    topic: function() { return new RarityListResponse(json); },
    'has an array of results': function(response) {
      assert.isArray(response.results);
    },
    'with 8 objects': function(response) {
      assert.equal(response.results.length, 8);
      response.results.forEach(function(val) {
        assert.isObject(val);
      });
    }
  }
};

exports = module.exports = function($RarityListResponse) {
  RarityListResponse = $RarityListResponse;
  return batch;
};

exports['@require'] = [ 'models/RarityListResponse' ];