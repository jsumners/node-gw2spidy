'use strict';

/**
 * Represents a response as returned by the Item Data portion of the
 * GW2 Spidy REST API.
 *
 * @param {string} json A sting of JSON that represents a response
 * @returns {ItemDataResponse}
 * @constructor
 */
function ItemDataResponse(json) {
  if (! (this instanceof ItemDataResponse)) {
    return new ItemDataResponse(json);
  }

  var self = Object.getPrototypeOf(this);
  if (json) {
    var parsedJson = JSON.parse(json);
    Object.keys(parsedJson).forEach(function(val) {
      this[val] = parsedJson[val];
    }, self);
  }
}

ItemDataResponse.prototype = {
  /**
   * Retrieve the item data object as returned by the GW2 Spidy REST API.
   *
   * @returns {object} The item data object
   */
  get result() {
    return this._result;
  },
  set result(result) {
    this._result = result;
  }
};

exports = module.exports = function() {
  return ItemDataResponse;
};

exports['@singleton'] = false;