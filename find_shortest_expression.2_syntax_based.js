// Generates random expressions from a simple grammar tree, and then tests to see if they match the desired output

// ISSUES
//
// It is difficult to keep the size of the expression bounded

// FUTURE
//
// We could add weights/heuristics to each of the choices at each level
//
// We could implement an exhaustive breadth-first search, instead of random expressions
//
// Make it run over multiple cores

// !prettier --write --single-quote --use-tabs --print-width 120 --trailing-comma=all %
// edit
// set ts=2 sw=2

const maxDepth = 4;

// This just helps us to put circular references inside an array.  We first create the array, and then fill it.
function fillArray(array, content) {
	array.splice(0, 0, ...content);
}

// Inside the grammar, a simple Array means "or", i.e. you can pick any one of these things.
//
// But we also need an "and" to say that these things must all come together (e.g. a binary operation requires two parameters and one operator).
//
// For the "and" clauses we use concat() which defines itself as an object, so it can be distinguished from an array.
//
const concat = (content) => ({ type: 'concat', content: content });

function isConcat(grammarBit) {
	return typeof grammarBit === 'object' && grammarBit.type === 'concat';
}

function getGrammar() {
	// CONSIDER: We could also consider other numbers like 1e3 and 4.5

	const Variable = ['i'];

	const Digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const Number = [];
	fillArray(Number, [Digit, concat([Digit, Number])]);

	const Value = [Number, Variable];

	const UnaryOp = ['!', '~'];

	const BinaryOp = ['^', '&', '|', '+', '-', '*', '/', '>', '<' /* '==', '!=', '&&', '||' */];

	const Expression = [];
	fillArray(Expression, [
		Value,
		concat([Expression, BinaryOp, Expression]),
		concat([UnaryOp, Expression]),
		concat([Expression, '?', Expression, ':', Expression]),
		concat(['(', Expression, ')']),
	]);

	console.log("Grammar: %o", Expression);

	return Expression;
}

function findShortestExpression(inputsAndOutputs) {
	console.log('Searching for an expression that will output:', inputsAndOutputs);

	//const dictionary = "i><!&|^~%+-*/=0123456789()";
	//const dictionary = "i^0123456789&><!|%+-()";

	const grammar = getGrammar();

	// For performance
	const entries = Object.entries(inputsAndOutputs);

	let bestSoFar = null;

	while (true) {
		const expression = buildRandomExpressionBit(grammar);
		//console.log("[find_shortest_expression.js] expression:", expression);
		try {
			const worked = testString(expression, entries);
			if (worked) {
				// Found a working expression!
				console.log(`Found a working expression: ${expression}`);
				if (!bestSoFar || expression.length <= bestSoFar.length) {
					bestSoFar = expression;
				}
				console.log(`Best so far: ${bestSoFar}`);
				//process.exit(0);
			}
		} catch (error) {
			console.log(`Problem with expression: ${expression} - ${error}`);
		}
	}
}

function buildRandomExpressionBit(grammarBit, depth = 0) {
	//const resolvedGrammarBit = typeof grammarBit === 'function' ? grammarBit() : grammarBit;
	const resolvedGrammarBit = grammarBit;
	if (Array.isArray(resolvedGrammarBit)) {
		// This would sometimes result in: RangeError: Maximum call stack size exceeded
		//const choices = resolvedGrammarBit;
		let choices = resolvedGrammarBit;
		if (depth >= maxDepth - 1) {
			// If we are getting to deep, then prefer to select a simple choice at this stage
			// (Concats are usually less simple, because they are often recursive)
			const filteredChoices = resolvedGrammarBit.filter((choice) => !isConcat(choice));
			// However that isn't always possible.  If we can't do it now, we will try again in the next layer.
			if (filteredChoices.length > 0) {
				choices = filteredChoices;
			}
		}
		const choice = chooseRandomItemFromArray(choices, depth);
		//console.log("[find_shortest_expression.js] choice:", choice);
		const choiceArray = isConcat(choice) ? choice.content : [choice];
		const bits = choiceArray.map((bit) => buildRandomExpressionBit(bit, depth + 1));
		return bits.join('');
	}
	return resolvedGrammarBit;
}

function chooseRandomItemFromArray(array, depth) {
	return array[(Math.random() * array.length) | 0];
	// Repeated random choice tends to generate really long expressions, but we are more interested in short expressions
	// How can we get it to generate smaller expressions?
	// Lean towards the left of the array
	//return array[(Math.random() ** 1.5) * array.length | 0];
	//return array[(Math.random() ** 2) * array.length | 0];
	//return array[(Math.random() ** (1 + depth / 4)) * array.length | 0];
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
