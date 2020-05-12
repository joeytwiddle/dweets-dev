const concat = (content) => ({ type: 'concat', content: content });

function isConcat(grammarBit) {
	return typeof grammarBit === 'object' && grammarBit.type === 'concat';
}

function getGrammar() {
	// CONSIDER: We could also consider other numbers like 1e3 and 4.5

	const Digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const Variable = ['i'];

	const Number = [Digit, concat([Digit, () => Number])];

	const Value = [Variable, Number];

	const UnaryOp = ['!', '~'];

	const BinaryOp = ['>', "<", '&', '|', '^', '+', '-', '*', '/', /* '==', '!=', '&&', '||' */];

	const Expression = [
		Value,
		concat([UnaryOp, () => Expression]),
		concat([() => Expression, BinaryOp, () => Expression]),
		concat(["(", () => Expression, ")"]),
	];

	return Expression;
}

function findShortestExpression(inputsAndOutputs) {
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
	const resolvedGrammarBit = typeof grammarBit === 'function' ? grammarBit() : grammarBit;
	if (Array.isArray(resolvedGrammarBit)) {
		// This would sometimes result in: RangeError: Maximum call stack size exceeded
		//const choices = resolvedGrammarBit;
		let choices = resolvedGrammarBit;
		if (depth >= 10) {
			// If we are getting to deep, then only allow a simple string to be selected at this stage.
			const filteredChoices = resolvedGrammarBit.filter(choice => !isConcat(choice));
			// However this isn't always possible.  If we can't do it now, we will try again in the next layer.
			if (filteredChoices.length > 0) {
				choices = filteredChoices;
			}
		}
		const choice = chooseRandomItemFromArray(choices);
		//console.log("[find_shortest_expression.js] choice:", choice);
		const choiceArray = isConcat(choice) ? choice.content : [choice];
		const bits = choiceArray.map(bit => buildRandomExpressionBit(bit, depth + 1));
		return bits.join('');
	}
	return resolvedGrammarBit;
}

function chooseRandomItemFromArray(array) {
	return array[Math.random() * array.length | 0];
}

// @ts function testString(str: string): boolean;
function testString(str, entries) {
	if (!str.includes("i")) return;
	if (Math.random() < 0.000001) console.log("Testing:", str);
	for (const [input, output] of entries) {
		// For better performance, we moved the try outside the function
		//try {
		const i = input;
		const result = eval(str);
		//console.log(`${i} => ${result}`);
		//const match = typeof output === 'function' ? output(result) : output === result;
		// For performance, LOOK_FOR_EXACT_MATCH
		//const match = output === result;
		// For performance, CHECK_TRUTHY_FALSY
		const match = !!output === result;
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
	60: truthy,
	61: falsy,
	62: truthy,
	63: falsy,
	64: truthy,
	65: falsy,
	66: falsy,
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
for (const key in inputsAndOutputs) {
	if (inputsAndOutputs[key] === truthy) {
		inputsAndOutputs[key] = true;
	} else if (inputsAndOutputs[key] === falsy) {
		inputsAndOutputs[key] = false;
	}
}

findShortestExpression(inputsAndOutputs);
