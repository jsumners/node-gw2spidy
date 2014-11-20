# GW2Spidy Node Module API

This Node module's primary interface is defined in the
[gw2spidy](Gw2SpidyClient.html) module. Thus, to begin using this API simply
require it and start using it:

```javascript
var gw2spidy = require('gw2spidy');

gw2spidy.types.get(function(err, response) {
  if (err) {
    console.log('error => ', err);
  } else {
    console.log(response.results);
  }
});
```

The gw2spidy module provides easy access to the following submodules:

* [Disciplines](Disciplines.html)
* [Items](Items.html)
* [Types](Types.html)
* [Rarities](Rarities.html)