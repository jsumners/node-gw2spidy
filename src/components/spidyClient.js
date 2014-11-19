'use strict';

var http = require('http');

var server = 'www.gw2spidy.com',
    basePath = '/api/v0.9/json/';

var client404 = new Error('GW2 Spidy returned a 404');

/**
 * An interface for getting data from the GW2 Spidy REST API. You shouldn't
 * need to use this interface directly. The {@link Gw2SpidyClient} provides
 * a higher level interface that is easier to use.
 *
 * @returns {SpidyClient}
 * @constructor
 */
function SpidyClient() {
  if (! (this instanceof SpidyClient)) {
    return new SpidyClient();
  }
}

/**
 * This callback is invoked when a GET request to the GW2 Spidy REST API has
 * completed.
 *
 * @callback SpidyClient~RestGetCallback
 * @param {Error} err An error object or null (no error)
 * @param {string} json A string of JSON that represents the result
 */

/**
 * Attempts to retrieve JSON data from a specified endpoint, e.g. `/types`.
 *
 * @param {string} endpoint An endpoint on the GW2 Spidy API
 * @param {SpidyClient~RestGetCallback} cb The callback to invoke when done
 */
SpidyClient.prototype.get = function restGet(endpoint, cb) {
  var _endpoint = (endpoint.charAt(0) === '/') ? endpoint.substr(1) : endpoint;
  var httpOptions = {
    host: server,
    path: basePath + _endpoint
  };

  var request = http.request(httpOptions, function requestCB(response) {
    if (response.status === 404) {
      cb(client404);
      return;
    }

    var data = '';
    response.on('data', function dataCB(chunk) {
      data += chunk;
    });

    response.on('error', function erroCB(err) {
      cb(err);
    });

    response.on('end', function endCB() {
      cb(null, data.toString());
    });
  });

  request.on('error', function requestErrorCB(err) {
    cb(err);
  });

  request.end();
};

exports = module.exports = function() {
  return new SpidyClient();
};

exports['@singleton'] = true;