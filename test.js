'use strict';
var test = require('ava');
var getSetProps = require('./get-set-props');

test(function (t) {
	t.assert(Object.keys(getSetProps).length > 0);
	t.assert(getSetProps.hasOwnProperty('Array'));
	t.assert(getSetProps.hasOwnProperty('Number'));
	t.assert(getSetProps.Error.indexOf('stack') !== -1);
});
