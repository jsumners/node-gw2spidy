'use strict';

var assert = require('assert');

var ItemDataResponse;

var json = '{"result":{"data_id":49192,"name":"The Juggernaut","rarity":5,' +
  '"restriction_level":80,"img":"https:\/\/render.guildwars2.com\/file\/F9FAEDF77052A514E876145908B3B3346314A13E\/456015.png",' +
  '"type_id":18,"sub_type_id":1,"price_last_changed":"2014-11-20 15:22:24 UTC",' +
  '"max_offer_unit_price":0,"min_sale_unit_price":0,"offer_availability":0,' +
  '"sale_availability":0,"sale_price_change_last_hour":0,"offer_price_change_last_hour":0}}';

var batch = {
  'An ItemDataResponse': {
    topic: function() { return new ItemDataResponse(json); },
    'has a single result': function(response) {
      assert.isObject(response.result);
    },
    'with a property named data_id': function(response) {
      assert.isNotNull(response.result.data_id);
    },
    'that is a number': function(response) {
      assert.isNumber(response.result.data_id);
    }
  }
};

exports = module.exports = function($ItemDataResponse) {
  ItemDataResponse = $ItemDataResponse;
  return batch;
};

exports['@require'] = [ 'models/ItemDataResponse' ];