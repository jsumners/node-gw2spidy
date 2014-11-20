# GW2Spidy

This is an interface to the [Gw2 Spidy](http://gw2spidy.com/) REST API.
The documentation for this module's API is located at
[http://jsumners.github.io/node-gw2spidy/](http://jsumners.github.io/node-gw2spidy/).

## Install

```bash
npm install --save gw2spidy
```

## Example

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

# License

[http://jsumners.mit-license.org](http://jsumners.mit-license.org/)

THE MIT LICENSE (MIT) Copyright © 2014 James Sumners james.sumners@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.