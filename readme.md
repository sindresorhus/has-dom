# has-dom [![Build Status](https://travis-ci.org/sindresorhus/has-dom.svg?branch=master)](https://travis-ci.org/sindresorhus/has-dom)

> Check if a JavaScript environment has a [DOM](http://en.wikipedia.org/wiki/Document_Object_Model)


## Install

```
$ npm install --save has-dom
```


## Usage

```js
var hasDom = require('has-dom');

// In Node.js
hasDom();
//=> false

// In the browser
hasDom();
//=> true
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
