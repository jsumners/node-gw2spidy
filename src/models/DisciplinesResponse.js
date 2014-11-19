'use strict';

/**
 * Represents a list of types returned from the Disciplines portion of the
 * GW2 Spidy REST API.
 *
 * @param {string} json A string of JSON to convert into a DisciplinesResponse
 * @returns {DisciplinesResponse}
 * @constructor
 */
function DisciplinesResponse(json) {
  if (! (this instanceof DisciplinesResponse)) {
    return new DisciplinesResponse(json);
  }

  var self = Object.getPrototypeOf(this);
  if (json) {
    var parsedJson = JSON.parse(json);
    Object.keys(parsedJson).forEach(function(val) {
      this[val] = parsedJson[val];
    }, self);
  }
}

DisciplinesResponse.prototype = {
  /**
   * Retrive the list of {@link Discipline} objects as returned by the
   * REST API.
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
  return DisciplinesResponse;
};

exports['@singleton'] = false;