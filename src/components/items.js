'use strict';

var spidyClient = {},
    ItemListResponse = function(){},
    ItemDataResponse = function(){};

/**
 * An interface for interacting with the Items portion of the GW2 Spidy
 * REST API.
 *
 * @returns {Items}
 * @constructor
 */
function Items() {
  if (! (this instanceof Items)) {
    return new Items();
  }
}

/**
 * This callback is invoked when a query for a list of items has completed.
 * This could be all available items, or all items of a specific type.
 *
 * @callback Items~ItemListCallback
 * @param {Error} err An error or null (no error)
 * @param {ItemListResponse} response An instance of ItemListResponse
 */

/**
 * Gets a list of <strong>all</strong> available items. This is a large list.
 * You should use a different method to narrow down your search.
 *
 * @param {Items~ItemListCallback} cb The callback to invoke when done
 */
Items.prototype.getAll = function getItems(cb) {
  spidyClient.get('/all-items/all', function clientCB(err, json) {
    if (err) {
      cb(err);
      return;
    }

    var response = new ItemListResponse(json);
    cb(null, response);
  });
};

/**
 * This callback is invoked when a query for a specific item has completed.
 *
 * @callback Items~ItemDataCallback
 * @param {Error} err An error or null (no error)
 * @param {ItemDataResponse} response An instance of ItemDataResponse
 */

/**
 * Query the GW2 Spidy database for a specific item identified by its unique
 * item number. For example, to get the details for The Juggernaut, you'd
 * supply 49192 as the <code>itemId</code>.
 *
 * @param {number} itemId The unique item identfier to retrieve
 * @param {Items~ItemDataCallback} cb The callback to invoke when done
 * @since 0.2.0
 */
Items.prototype.get = function(itemId, cb) {
  spidyClient.get('/item/' + itemId, function clientCB(err, json) {
    if (err) {
      cb(err);
      return;
    }

    var response = new ItemDataResponse(json);
    cb(null, response);
  });
};

/**
 * <p>Search for items in the GW2 Spidy database. The search <code>term</code>
 * can be a string or an object.</p>
 *
 * <p>String search term: should be a simple term like "jugg" or "red dye".</p>
 *
 * <p>Object search term: this object should have properties "term" and "page".
 * The "term" property should be just as the aforementioned string search term.
 * The "page" property should indicate which page of the results to retrieve.
 * The default page is 1, and pages are in lists of 100.</p>
 *
 * <p>Object term example:</p>
 *
 * <pre>{
 *   term: "jugg",
 *   page: 1
 * }</pre>
 *
 * @param {string|object} term The search term or an object with term and page
 * @param {Items~ItemListCallback} cb The callback to invoke when done
 */
Items.prototype.search = function(term, cb) {
  var searchTerm = term,
      page = 1;
  if (typeof term === 'object') {
    searchTerm = (term.term) ? term.term : 'none';
    page = (term.page) ? term.page : 1;
  }

  var endpoint = ['/item-search', encodeURI(searchTerm), page].join('/');
  spidyClient.get(endpoint, function(err, json) {
    if (err) {
      cb(err);
      return;
    }

    var response = new ItemListResponse(json);
    cb(null, response);
  });
};

exports = module.exports = function($spidyClient, $ItemListResponse, $ItemDataResponse) {
  spidyClient = $spidyClient;
  ItemListResponse = $ItemListResponse;
  ItemDataResponse = $ItemDataResponse;

  return new Items();
};

exports['@require'] = [
  'spidyClient',
  'models/ItemListResponse',
  'models/ItemDataResponse'
];
exports['@singleton'] = true;