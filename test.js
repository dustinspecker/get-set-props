import test from 'ava';
import getSetProps from './index.js';

test('get-set-props', t => {
	t.true(Object.keys(getSetProps).length > 0);
	t.truthy(Object.prototype.hasOwnProperty.call(getSetProps, 'Array'));
	t.truthy(Object.prototype.hasOwnProperty.call(getSetProps, 'Number'));
	t.true(getSetProps.Error.includes('stack'));
});
