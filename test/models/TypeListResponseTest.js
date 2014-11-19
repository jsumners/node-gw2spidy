'use strict';

var assert = require('assert'),
    TypeListResponse = function(){};

var json = '{"results":[{"id":0,"name":"Armor","subtypes":[{"id":0,"name":"Coat"},' +
  '{"id":1,"name":"Leggings"},{"id":2,"name":"Gloves"},{"id":3,"name":"Helm"},' +
  '{"id":4,"name":"Aquatic Helm"},{"id":5,"name":"Boots"},{"id":6,"name":"Shoulders"}]}]}';

var batch = {
  'A TypeListResponse should have': {
    topic: function() { return new TypeListResponse(json); },
    'an array of results': function(response) {
      assert.equal(response.results.length, 1);
    }
  }
};

exports = module.exports = function($TypeListResponse) {
  TypeListResponse = $TypeListResponse;
  return batch;
};

exports['@require'] = [ 'models/TypeListResponse' ];