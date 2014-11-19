'use strict';

/**
 * Represents a list of types returned from the Types portion of the
 * GW2 Spidy REST API.
 *
 * @param {string} json A string of JSON to convert into a TypeListResponse
 * @returns {TypeListResponse}
 * @constructor
 */
function TypeListResponse(json) {
  if (! (this instanceof TypeListResponse)) {
    return new TypeListResponse(json);
  }

  var self = Object.getPrototypeOf(this);
  if (json) {
    var parsedJson = JSON.parse(json);
    Object.keys(parsedJson).forEach(function(val) {
      this[val] = parsedJson[val];
    }, self);
  }
}

TypeListResponse.prototype = {
  /**
   * The list of {@link Type} objects as returned by the API.
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
  return TypeListResponse;
};

exports['@singleton'] = false;