// Slightly modified version of
// https://github.com/sindresorhus/proto-props/blob/04fad48f995428eff7e57ab088601a548fc20f2e/generate.js

'use strict';
var fs = require('fs');
var jsTypes = require('js-types');
var ret = {};

jsTypes.forEach(function (x) {
	try {
		ret[x] = Object.getOwnPropertyNames(new global[x]()).sort();
	} catch (e) {
		// Sloppy solution, but it works for now.
		// DataView and Promise require an arg for their constructors
		// Symbol is not a constructor
		// THe above 3 types do not have any getter/setters
		ret[x] = [];
	}
});

fs.writeFileSync('get-set-props.json', JSON.stringify(ret, null, '\t'));
