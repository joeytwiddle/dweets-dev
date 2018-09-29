#!/usr/bin/env node

// http://www.2ality.com/2013/09/javascript-unicode.html
function toUTF16(codePoint) {
  var TEN_BITS = parseInt('1111111111', 2);
  function u(codeUnit) {
    return '\\u'+codeUnit.toString(16).toUpperCase();
  }

  if (codePoint <= 0xFFFF) {
    return u(codePoint);
  }
  codePoint -= 0x10000;

  // Shift right to get to most significant 10 bits
  var leadSurrogate = 0xD800 + (codePoint >> 10);

  // Mask to get least significant 10 bits
  var tailSurrogate = 0xDC00 + (codePoint & TEN_BITS);

  return u(leadSurrogate) + u(tailSurrogate);
}

const input = process.argv[2];

let result;
console.log('input.length:', input.length)

//const result = Number(input) > 0 ? toUTF16(input) : toUTF16(input.codePointAt(0));

if (Number(input) > 0) {
  result = toUTF16(input);
} else {
  result = '';
  for (let i = 0; i < input.length; i++) {
    const codePoint = input.codePointAt(i);
    if (codePoint > 255) {
      result += toUTF16(codePoint);
      i++;
    } else {
      result += input.charAt(i);
    }
  }
}

console.log('result.length:', result.length)

console.log("Result: " + result);
