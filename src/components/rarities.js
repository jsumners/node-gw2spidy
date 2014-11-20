'use strict';

var spidyClient ={},
    RarityListResponse = function(){};

/**
 * An interface for interacting with the Rarities portion of the GW2 Spidy
 * REST API.
 *
 * @since 0.2.0
 * @returns {Rarities}
 * @constructor
 */
function Rarities() {
  if (! (this instanceof Rarities)) {
    return new Rarities();
  }
}

/**
 * This callback is invoked when a request to get the list of rarities
 * has completed.
 *
 * @callback Rarities~RaritiesCallback
 * @param {Error} err An error or null (no error)
 * @param {RaritiesListResponse} response An instance of RaritiesListResponse
 */

/**
 * Issue a request to the REST API for a list of the possible rarities,
 * e.g. "legendary".
 *
 * @param {Rarities~RaritiesCacllback} cb The callback to invoke when done
 */
Rarities.prototype.get = function getRarities(cb) {
  spidyClient.get('/rarities', function(err, json) {
    if (err) {
      cb(err);
      return;
    }

    var response = new RarityListResponse(json);
    cb(null, response);
  });
};

exports = module.exports = function($spidyClient, $RarityListResponse) {
  spidyClient = $spidyClient;
  RarityListResponse = $RarityListResponse;

  return new Rarities();
};

exports['@require'] = [ 'spidyClient', 'models/RarityListResponse' ];
exports['@singleton'] = true;