'use strict';

var basePath = (function resolvePath() {
  return __filename.substr(0, __filename.indexOf('gw2spidy.js'));
}());

var ioc = require('electrolyte');

ioc.loader('', ioc.node(basePath + '/src/components'));
ioc.loader('models', ioc.node(basePath + '/src/models'));

/**
 * The primary interface for interacting with the GW2 Spidy REST API. It
 * provides a simple query language categorized by the various Spidy API
 * endpoint types.
 *
 * @returns {Gw2SpidyClient}
 * @constructor
 */
function Gw2SpidyClient() {
  if (! (this instanceof Gw2SpidyClient)) {
    return new Gw2SpidyClient();
  }
}

/**
 * An instance of {@link Disciplines} for interacting with the Disciplines
 * portion of the API.
 *
 * @type {Disciplines}
 */
Gw2SpidyClient.prototype.disciplines = ioc.create('disciplines');

/**
 * An instance of {@link Items} for interacting with the Items portsion of
 * the API.
 *
 * @type {Items}
 */
Gw2SpidyClient.prototype.items = ioc.create('items');

/**
 * An instance of {@link Types} for interacting with the Types portion
 * of the API.
 *
 * @type {Types}
 */
Gw2SpidyClient.prototype.types = ioc.create('types');

/**
 * An instance of {@link Rarities} for interacting with the Rarities portion
 * of the API.
 *
 * @type {Rarities}
 */
Gw2SpidyClient.prototype.rarities = ioc.create('rarities');

exports = module.exports = (function() {
  return new Gw2SpidyClient();
}());

exports['@singleton'] = false;