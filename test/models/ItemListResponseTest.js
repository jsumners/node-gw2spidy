'use strict';

var assert = require('assert'),
    ItemListResponse = function(){};

var json = '{"count":1, "page": 1, "last_page": 1, "total":1, "results": [{"a":2}]}';

var batch = {
  'ItemListResponse should create an object ': {
    topic: function() {
      return new ItemListResponse(json);
    },
    'with valid property values': function (itemListResponse) {
      assert.equal(itemListResponse.count, 1);
      assert.equal(itemListResponse.page, 1);
      assert.equal(itemListResponse.lastPage, 1);
      assert.equal(itemListResponse.total, 1);
      assert.equal(itemListResponse.results.length, 1);
      assert.equal(itemListResponse.results[0].a, 2);
    }
  }
};

exports = module.exports = function($ItemListResponse) {
  ItemListResponse = $ItemListResponse;
  return batch;
};

exports['@require'] = [ 'models/ItemListResponse' ];