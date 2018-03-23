import test from 'ava';
import m from '.';

test('main', t => {
	t.false(m());
	global.window = {};
	global.document = {};
	global.document.createElement = () => {};
	t.true(m());
});
