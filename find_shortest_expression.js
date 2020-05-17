// Generates expressions by bruteforce breadth-first search and tests to see if they match the desired output

// This is slightly less performant than the version which generates a list, but it can go much deeper because it doesn't use increasing amounts of memory

// DONE
//
// pavel's method skips some impossible parts of the tree, by marking which chars are impossible to come after another char.  Doing that could greatly increase speed.
//
// TODO
//
// Check if my invalidFollowers match pavel's!
//
// For Dwitter, we may also be able to use S(e) C(e) T(e) to help us
//
// Use multiple cores
//
// Skip redundant subpaths, if they are equivalent to another that has already been checked
// E.g. If we have already done `i%2?...` then there is no point doing `i&1?...` (except perhaps for negative `i`!)

// !prettier --write --use-tabs --print-width 120 --single-quote --trailing-comma=all --quote-props=consistent %
// edit
// set ts=2 sw=2

//

const maxLength = 15;

// A human might write `1+2*i` but the miner discovered `i-~i`
//const target = [1, 3, 5, 7];
//const target = (i) => 1 + 2 * i;

// 2-i%3
const target = [2, 1, 0, 2, 1, 0];
//const target = (i) => 2 - (i % 3);

// How about this?  Is it possible to simplify?  Apparently not!
//const target = (i) => (2 - i) % 3;

// This one has been very difficult to generate
// Here is my human attempt: `i<2?5+2*i:5*i-6`
//const target = [5, 7, 4, 9];

//const target = [5, 7, 3, 5];

// Can this be simplified?
//const target = (i) => i - 2 * ((i / 3) | 0);

//

findShortestExpression(target);

//

// Using this approach has made the search 24 times faster!
function getInvalidFollowers() {
	// TODO: Consider a simpler structure like this (we can generate it from an array):
	//
	//     const invalidFollowers = {
	//       '=)': true,
	//       '-+': true,
	//       ...
	//     };
	//
	// It might be clearer for us to see the forbidden combinations.
	//
	// It might be faster to lookup, going only one level deep (but requiring string concatenation).  (Maybe not much now that I have extracted invalidFollowersNow.)

	// I leave out '=' because it is special, it can sort of be combined with the others, e.g.`i*=3`.
	// TODO: Actually `*` and `&` and `|` and `!` can be combined into `**` and `&&` and `||` and `!!`, so we should really allow these.
	// TODO: '+-' could be excluded
	// I also exclude '-' from the binaryOperators, because it isn't always a binary operator, sometimes it defines a negative number,and that might be useful.
	// Plus can do the same, but that is redundant, so we include it.
	const unaryOperators = '~!';
	const binaryOperators = '^&|><%+*/?:';
	const allOperators = unaryOperators + binaryOperators;
	const allDigits = '0123456789';

	const invalidFollowersDef = {
		'': ')=' + binaryOperators,
		'i': 'i(' + allDigits + unaryOperators,
		'0': 'i~!(', // ... other numbers will copy from this ...
		'^': allOperators + ')', // ... other operators will copy from this ...
		'(': binaryOperators + ')',
		')': allDigits + binaryOperators + '(',
		'=': binaryOperators + ')',
		'-': binaryOperators,
	};
	for (const number of allDigits) {
		invalidFollowersDef[number] = invalidFollowersDef['0'];
	}
	for (const operator of allOperators) {
		invalidFollowersDef[operator] = invalidFollowersDef['^'];
	}
	//console.log("invalidFollowersDef:", invalidFollowersDef);

	// Create a hashtable structure for faster lookup
	const invalidFollowers = {};
	for (const left in invalidFollowersDef) {
		invalidFollowers[left] = {};
		for (const right of invalidFollowersDef[left]) {
			invalidFollowers[left][right] = true;
		}
	}

	//console.log("invalidFollowers:", invalidFollowers);
	return invalidFollowers;
}

function findShortestExpression(target) {
	const inputsAndOutputs =
		typeof target === 'object'
			? target
			: Array.isArray(target)
			? generateInputsFromArray(target)
			: typeof target === 'function'
			? generateInputsFromFunction(target)
			: throwError(`Don't know how to generate inputs from ${typeof target}`);

	console.log('Searching for an expression that will output:', JSON.stringify(inputsAndOutputs));

	const dictionary = 'i^0123456789&|~><%+-*/=!?:()';
	//const dictionary = "i^0123456789&|><%+-!()";

	const invalidFollowers = getInvalidFollowers();

	// For performance
	const entries = Object.entries(inputsAndOutputs);

	let bestSoFar = null;

	for (let len = 1; len <= maxLength; len++) {
		console.log(`${shortDate()} [log] Testing all expressions of length ${len}...`);
		generateAndTest(len);
	}

	function generateAndTest(targetLen, sofar = '', len = 0) {
		const testNow = len + 1 === targetLen;

		const lastChar = sofar[sofar.length - 1] || '';
		//console.log("lastChar:", lastChar);
		const invalidFollowersNow = invalidFollowers[lastChar];

		for (const char of dictionary) {
			if (invalidFollowersNow[char]) {
				continue;
			}
			const expression = sofar + char;
			if (testNow) {
				tryTestString(expression, entries);
			} else {
				generateAndTest(targetLen, expression, len + 1);
			}
		}
	}

	function tryTestString(expression, entries) {
		try {
			const worked = testString(expression, entries);
			if (worked) {
				// Found a working expression!
				console.log(`Found a working expression: ${expression}`);
				process.exit(0);
				if (!bestSoFar || expression.length <= bestSoFar.length) {
					bestSoFar = expression;
				}
				console.log(`Best so far: ${bestSoFar}`);
			}
		} catch (error) {
			//console.log(`Problem with expression: ${expression} - ${error}`);
		}
	}
}

// @ts function testString(str: string): boolean;
function testString(str, entries) {
	if (Math.random() < 0.00001) process.stdout.write(`${Array(120).fill(' ').join('')}\rTesting: ${str}\r`);
	if (!str.includes('i')) return;
	for (const [input, output] of entries) {
		// For better performance, we moved the try outside the function
		//try {
		const i = input;
		const result = eval(str);
		//console.log(`${i} => ${result}`);
		//const match = typeof output === 'function' ? output(result) : output === result;
		// For performance, LOOK_FOR_EXACT_MATCH
		const match = output === result;
		// For performance, CHECK_TRUTHY_FALSY
		//const match = !!output === result;
		if (!match) {
			return false;
		}
		//} catch (e) {
		//    return false;
		//}
	}
	return true;
}

function shortDate() {
	return new Date().toString().replace(/ GMT.*/, '');
}

//const truthy = (val) => !!val;
//const falsy = (val) => !val;

// For performance, when doing LOOK_FOR_EXACT_MATCH or CHECK_TRUTHY_FALSY
/*
for (const key in inputsAndOutputs) {
	if (inputsAndOutputs[key] === truthy) {
		inputsAndOutputs[key] = true;
	} else if (inputsAndOutputs[key] === falsy) {
		inputsAndOutputs[key] = false;
	}
}
*/

function generateInputsFromArray(array) {
	const inputsAndOutputs = {};
	array.forEach((val, i) => {
		inputsAndOutputs[i] = val;
	});
	return inputsAndOutputs;
}

function generateInputsFromFunction(fn) {
	const array = [];
	for (let i = 0; i < 99; i++) {
		array.push(fn(i));
	}
	return generateInputsFromArray(array);
}

function throwError(message) {
	throw new Error(message);
}
