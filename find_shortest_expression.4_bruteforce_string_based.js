// Generates expressions by bruteforce breadth-first search and tests to see if they match the desired output

// This is slightly less performant than the version which generates a list, but it can go much deeper because it doesn't use increasing amounts of memory

// TODO
//
// pavel's method skips some impossible parts of the tree, by marking which chars are impossible to come after another char.  Doing that could greatly increase speed.
//
// Use multiple cores
//
// Skip redundant subpaths, if they are equivalent to another that has already been checked
// E.g. If we have already done `i%2?...` then there is no point doing `i&1?...` (except perhaps for negative `i`!)

// !prettier --write --single-quote --use-tabs --print-width 120 --trailing-comma=all %
// edit
// set ts=2 sw=2

const maxLength = 15;

function findShortestExpression(inputsAndOutputs) {
	console.log('Searching for an expression that will output:', inputsAndOutputs);

	const dictionary = 'i^0123456789&|~><%+-*/=!?:()';
	//const dictionary = "i^0123456789&|><%+-!()";

	// For performance
	const entries = Object.entries(inputsAndOutputs);

	let bestSoFar = null;

	for (let len = 1; len <= maxLength; len++) {
		console.log(`${shortDate()} Testing all expressions of length ${len}...`);
		generateAndTest(len);
	}

	function generateAndTest(targetLen, sofar = '', len = 0) {
		const testNow = len + 1 === targetLen;

		for (const char of dictionary) {
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
				if (!bestSoFar || expression.length <= bestSoFar.length) {
					bestSoFar = expression;
				}
				console.log(`Best so far: ${bestSoFar}`);
				process.exit(0);
			}
		} catch (error) {
			//console.log(`Problem with expression: ${expression} - ${error}`);
		}
	}
}

// @ts function testString(str: string): boolean;
function testString(str, entries) {
	if (Math.random() < 0.00003) process.stdout.write(`${Array(120).fill(' ').join('')}\rTesting: ${str}\r`);
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

const shortDate = () => new Date().toString().replace(/ GMT.*/, '');

const truthy = (val) => !!val;
const falsy = (val) => !val;

const inputsAndOutputs = {
	// A human might write `1+2*i` but the miner discovered `i-~i`
	/*
	0: 1,
	1: 3,
	2: 5,
	3: 7,
	*/

	// This one has been very difficult to generate
	// `i<2?5+2*i:5*i-6`
	0: 5,
	1: 7,
	2: 4,
	3: 9,

	/*
	60: truthy,
	61: falsy,
	62: truthy,
	63: falsy,
	64: truthy,
	65: falsy,
	66: falsy,
	/*
	67: falsy,
	68: truthy,
	69: falsy,
	70: falsy,
	71: falsy,
	72: falsy,
	73: falsy,
	74: falsy,
	75: falsy,
	76: truthy,
	77: falsy,
	78: falsy,
	79: falsy,
	/*
	*/
};

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

findShortestExpression(inputsAndOutputs);
