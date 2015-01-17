'use strict';
var test = require('ava');
var hasDom = require('./');

test(function (t) {
	t.assert(!hasDom());
	global.window = {};
	global.document = {};
	global.document.createElement = function () {};
	t.assert(hasDom());
	t.end();
});
