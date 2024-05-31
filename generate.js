// Slightly modified version of
// https://github.com/sindresorhus/proto-props/blob/04fad48f995428eff7e57ab088601a548fc20f2e/generate.js

import fs from 'node:fs';
import jsTypes from 'js-types';

const returnValue = {};

for (const x of jsTypes) {
	try {
		returnValue[x] = Object.getOwnPropertyNames(new global[x]()).sort();
	} catch {
		// Sloppy solution, but it works for now.
		// DataView and Promise require an arg for their constructors
		// Symbol is not a constructor
		// THe above 3 types do not have any getter/setters
		returnValue[x] = [];
	}
}

fs.writeFileSync('get-set-props.json', JSON.stringify(returnValue, null, '\t'));
