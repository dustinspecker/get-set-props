'use strict';
import getSetProps from './get-set-props';
import test from 'ava';

test(t => {
	t.assert(Object.keys(getSetProps).length > 0);
	t.assert(getSetProps.hasOwnProperty('Array'));
	t.assert(getSetProps.hasOwnProperty('Number'));
	t.assert(getSetProps.Error.indexOf('stack') !== -1);
});
