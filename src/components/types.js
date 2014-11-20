'use strict';

var spidyClient = {},
    TypeListResponse = function(){};

/**
 * An interface for interacting with the Types portion of the GW2 Spidy
 * REST API.
 *
 * @returns {Types}
 * @constructor
 */
function Types() {
  if (! (this instanceof Types)) {
    return new Types();
  }
}

/**
 * This callback is invoked when a request to get the list of types has
 * completed.
 *
 * @callback Types~TypesCallback
 * @param {Error} err An error or null (no error)
 * @param {TypeListResponse} response The list of types
 */

/**
 * Retrieve the list of possible types from the GW2 Spidy REST API.
 *
 * @param {Types~TypesCallback} cb The callback to invoke when done
 */
Types.prototype.get = function getTypes(cb) {
  spidyClient.get('/types', function(err, json) {
    if (err) {
      cb(err);
      return;
    }

    var response = new TypeListResponse(json);
    cb(null, response);
  });
};

exports = module.exports = function($spidyClient, $TypeListResponse) {
  spidyClient = $spidyClient;
  TypeListResponse = $TypeListResponse;

  return new Types();
};

exports['@require'] = [ 'spidyClient', 'models/TypeListResponse' ];
exports['@singleton'] = true;