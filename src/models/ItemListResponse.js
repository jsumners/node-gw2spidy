'use strict';

/**
 * Represents a list of items returned from GW2 Spidy's full item list.
 *
 * @param {string} json A string of JSON that represents a Spidy result list
 * @returns {ItemListResponse}
 * @constructor
 */
function ItemListResponse(json) {
  if (! (this instanceof ItemListResponse)) {
    return new ItemListResponse();
  }

  var self = Object.getPrototypeOf(this);

  if (json) {
    var parsedJson = JSON.parse(json);
    Object.keys(parsedJson).forEach(function mapItemJson(val) {
      var prop = (val === 'last_page') ? 'lastPage' : val;
      this[prop] = parsedJson[val];
    }, self);
  }
}

ItemListResponse.prototype = {
  /**
   * The number of results in the current page of results if the API
   * returned such information. Otherwise, it is -1.
   *
   * @returns {number}
   */
  get count() {
    return (this._count) ? this._count : -1;
  },
  set count(count) {
    this._count = (count) ? count : -1;
  },

  /**
   * The current page number of the results if the API returned such
   * information. Otherwise it is -1.
   *
   * @returns {number}
   */
  get page() {
    return (this._page) ? this._page : -1;
  },
  set page(page) {
    this._page = (page) ? page : -1;
  },

  /**
   * The number of the last available page of results if the API returned such
   * information. Otherwise, it is -1.
   *
   * @returns {number}
   */
  get lastPage() {
    return (this._lastPage) ? this._lastPage : -1;
  },
  set lastPage(lastPage) {
    this._lastPage = (lastPage) ? lastPage : -1;
  },

  /**
   * The total number of results if the API returned such information.
   * Otherwise, it is -1.
   *
   * @returns {number}
   */
  get total() {
    return (this._total) ? this._total : -1;
  },
  set total(total) {
    this._total = (total) ? total : -1;
  },

  /**
   * Retrieve the list of {@link Item} objects as returned by the REST API.
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
  return ItemListResponse;
};

exports['@singleton'] = false;