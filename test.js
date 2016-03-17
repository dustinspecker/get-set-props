'use strict';
import getSetProps from './get-set-props';
import test from 'ava';

test(t => {
	t.ok(Object.keys(getSetProps).length > 0);
	t.ok(getSetProps.hasOwnProperty('Array'));
	t.ok(getSetProps.hasOwnProperty('Number'));
	t.ok(getSetProps.Error.indexOf('stack') !== -1);
});
