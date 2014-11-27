'use strict';

var assert = require('assert'),
    ItemListingsResponse = function(){};

var json = '{"sell-or-buy":"buy","count":1,"page":1,"last_page":1,"total":1,' + '' +
  '"results":[{"listing_datetime":"2014-10-25 00:00:00 UTC","unit_price":0,"quantity":0,"listings":0}]}';

var batch = {
  'ItemListResponse should create an object ': {
    topic: function() {
      return new ItemListingsResponse(json);
    },
    'with valid property values': function (itemListingsResponse) {
      assert.equal(itemListingsResponse.sellOrBuy, 'buy');
      assert.equal(itemListingsResponse.count, 1);
      assert.equal(itemListingsResponse.page, 1);
      assert.equal(itemListingsResponse.lastPage, 1);
      assert.equal(itemListingsResponse.total, 1);
      assert.equal(itemListingsResponse.results.length, 1);
      assert.equal(itemListingsResponse.results[0].quantity, 0);
    }
  }
};

exports = module.exports = function($ItemListingsResponse) {
  ItemListingsResponse = $ItemListingsResponse;
  return batch;
};

exports['@require'] = [ 'models/ItemListingsResponse' ];