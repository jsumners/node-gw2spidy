'use strict';

/**
 * Represents a list of listings returned from GW2 Spidy's full item list.
 *
 * @since 0.3.0
 * @param {string} json A string of JSON representing the listings response
 * @returns {ItemListingsResponse}
 * @constructor
 */
function ItemListingsResponse(json) {
  if (! (this instanceof ItemListingsResponse)) {
    return ItemListingsResponse(json);
  }

  var self = Object.getPrototypeOf(this);

  if (json) {
    var parsedJson = JSON.parse(json);
    Object.keys(parsedJson).forEach(function mapItemJson(val) {
      var prop = (val === 'last_page') ? 'lastPage' : val;
      prop = (prop === 'sell-or-buy') ? 'sellOrBuy' : prop;
      this[prop] = parsedJson[val];
    }, self);
  }
}

ItemListingsResponse.prototype = {
  /**
   * Used to indicate if the {@link ItemListingsResponse#results} are listings
   * of sell orders or buy orders. The default is 'sell'.
   *
   * @returns {string} 'sell' if the results are sell order, 'buy' otherwise
   */
  get sellOrBuy() {
    return (this._sellOrBuy) ? this._sellOrBuy : 'sell';
  },
  set sellOrBuy(sellOrBuy) {
    this._sellOrBuy = (sellOrBuy) ? sellOrBuy : 'sell';
  },

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
   * Retrieve the list of {@link Listing} objects as returned by the REST API.
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

exports = module.exports = function(){
  return ItemListingsResponse;
};

exports['@singleton'] = false;