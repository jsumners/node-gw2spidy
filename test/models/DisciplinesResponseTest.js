'use strict';

var assert = require('assert'),
    DisciplinesResponse = function(){};

var json = '{"results":[{"id":4,"name":"Armorsmith"},{"id":2,"name":"Artificer"}' +
  ',{"id":8,"name":"Cook"},{"id":1,"name":"Huntsman"},{"id":7,"name":"Jeweler"},' +
  '{"id":5,"name":"Leatherworker"},{"id":6,"name":"Tailor"},{"id":3,"name":"Weaponsmith"}]}';

var batch = {
  'A DisciplinesResponse should have': {
    topic: function() { return new DisciplinesResponse(json); },
    'an array of results': function(response) {
      assert.equal(response.results.length, 8);
    }
  }
};

exports = module.exports = function($DisciplinesResponse) {
  DisciplinesResponse = $DisciplinesResponse;
  return batch;
};

exports['@require'] = [ 'models/DisciplinesResponse' ];