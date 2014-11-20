'use strict';

/**
 * Represents a list of rarities returned from the Rarities portion of the
 * GW2 Spidy REST API.
 *
 * @since 0.2.0
 * @param {string} json A string of JSON representing a rarity list response
 * @constructor
 */
function RarityListResponse(json) {
  if (! (this instanceof RarityListResponse)) {
    return new RarityListResponse(json);
  }

  var self = Object.getPrototypeOf(this);
  if (json) {
    var parsedJson = JSON.parse(json);
    Object.keys(parsedJson).forEach(function(val) {
      this[val] = parsedJson[val];
    }, self);
  }
}

RarityListResponse.prototype = {
  /**
   * A list of {@link Rarity} objects as returned by the GW2 Spidy REST API.
   *
   * @returns {array}
   */
  get results() {
    return (this._results) ? this._results : [];
  },
  set results(results) {
    this._results = (results) ? results : [];
  }
};

exports = module.exports = function() {
  // Yes, we could simply import TypeListResponse and return it,
  // but then JSDoc wouldn't know how to handle the situation since it
  // seems to have no concept of inheritance.

  return RarityListResponse;
};

exports['@singleton'] = false;