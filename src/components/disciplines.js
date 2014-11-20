'use strict';

var spidyClient = {},
    DisciplinesResponse = function(){};

/**
 * An interface for interacting with the Disciplines portion of the GW2 Spidy
 * REST API.
 *
 * @returns {Disciplines}
 * @constructor
 */
function Disciplines() {
  if (! (this instanceof Disciplines)) {
    return new Disciplines();
  }
}

/**
 * This callback is invoked when a call to the disciplines endpoint has
 * completed.
 *
 * @callback Disciplines~DisciplinesCallback
 * @param {Error} err An error or null (no error)
 * @param {DisciplinesResponse} response The list of disciplines
 */

/**
 * Retrieve the list of disciplines from the GW2 Spidy REST API.
 *
 * @param {Disciplines~DisciplinesCallback} cb The callback to invoke when done
 */
Disciplines.prototype.get = function getDisciplines(cb) {
  spidyClient.get('/disciplines', function clientCB(err, json) {
    if (err) {
      cb(err);
      return;
    }

    var response = new DisciplinesResponse(json);
    cb(null, response);
  });
};

exports = module.exports = function($spidyClient, $DisciplinesResponse) {
  spidyClient = $spidyClient;
  DisciplinesResponse = $DisciplinesResponse;

  return new Disciplines();
};

exports['@require'] = [ 'spidyClient', 'models/DisciplinesResponse' ];
exports['@singleton'] = true;