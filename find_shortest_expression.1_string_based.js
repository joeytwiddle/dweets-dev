(function() {
    const truthy = val => !!val;
    const falsy = val => !val;

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
    };

    //const dictionary = "i><!&|^~%+-*/=0123456789()";
    const dictionary = "i^0123456789&><!|%+-()";

    // For performance, LOOK_FOR_EXACT_MATCH or CHECK_TRUTHY_FALSY
    for (const key in inputsAndOutputs) {
        if (inputsAndOutputs[key] === truthy) {
            inputsAndOutputs[key] = true;
        } else if (inputsAndOutputs[key] === falsy) {
            inputsAndOutputs[key] = false;
        }
    }

    // For performance
    const entries = Object.entries(inputsAndOutputs);

    for (let len = 0; len < 20; len++) {
        console.log("[find_shortest_expression.js] len:", len);
        tryAllExpressionsOfLength(len);
    }

    function tryAllExpressionsOfLength(len) {
        buildAndTest('', len);
    }

    function buildAndTest(str, len) {
        if (str.length === len) {
            try {
                testString(str, entries);
            } catch (e) {
                return false;
            }
        } else {
            for (let i = 0; i < dictionary.length; i++) {
                const tmpStr = str + dictionary[i];
                buildAndTest(tmpStr, len);
            }
        }
    }

    // @ts function testString(str: string): boolean;
    function testString(str, entries) {
        if (!str.includes('i')) return;
        if (Math.random() < 0.000001) console.log('Testing:', str)
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
        // Found a working expression!
        console.log(`Found a working expression: ${str}`);
        process.exit(0);
        return true;
    }
}());
