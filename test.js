import test from 'ava';
import hasDom from './index.js';

test('main', t => {
	t.false(hasDom());
	global.window = {};
	global.document = {};
	global.document.createElement = () => {};
	t.true(hasDom());
});
