'use strict';
import test from 'ava';
import getSetProps from './get-set-props';

test(t => {
	t.true(Object.keys(getSetProps).length > 0);
	t.truthy(getSetProps.hasOwnProperty('Array'));
	t.truthy(getSetProps.hasOwnProperty('Number'));
	t.true(getSetProps.Error.indexOf('stack') !== -1);
});
