'use strict';
// This script should be executed from the project root dir (..)
// Run it like so:  `node test/index.js`

var ioc = require('electrolyte');

// Test imports
ioc.loader('test/models', ioc.node('test/models'));

// App imports
ioc.loader('models', ioc.node('src/models'));
ioc.loader(ioc.node('src/components'));

var vows = require('vows');

// Test batches
var ItemListResponseBatch = ioc.create('test/models/ItemListResponseTest');
var DisciplinesResponseBatch = ioc.create('test/models/DisciplinesResponseTest');
var TypeListResponseBatch = ioc.create('test/models/TypeListResponseTest');
var ItemDataResponseBatch = ioc.create('test/models/ItemDataResponseTest');
var RarityListResponseBatch = ioc.create('test/models/RarityListResponseTest');
var ItemListingsResponseBatch = ioc.create('test/models/ItemListingsResponseTest');
vows.describe('ItemListResponse')
  .addBatch(ItemListResponseBatch)
  .addBatch(DisciplinesResponseBatch)
  .addBatch(TypeListResponseBatch)
  .addBatch(ItemDataResponseBatch)
  .addBatch(RarityListResponseBatch)
  .addBatch(ItemListingsResponseBatch)
  .run();