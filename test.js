import test from 'ava';
import m from './';

test(t => {
	t.false(m());
	global.window = {};
	global.document = {};
	global.document.createElement = () => {};
	t.true(m());
});
