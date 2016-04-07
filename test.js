'use strict';
import getSetProps from './get-set-props';
import test from 'ava';

test(t => {
	t.truthy(Object.keys(getSetProps).length > 0);
	t.truthy(getSetProps.hasOwnProperty('Array'));
	t.truthy(getSetProps.hasOwnProperty('Number'));
	t.truthy(getSetProps.Error.indexOf('stack') !== -1);
});
