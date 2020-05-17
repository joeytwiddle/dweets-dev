// console version of: https://raw.githubusercontent.com/pavelb/pavelb.github.io/master/bruteforcer.html

// !prettier --write --single-quote --use-tabs --print-width 120 --trailing-comma=all %
// edit
// set ts=2 sw=2

const shortDate = () => new Date().toString().replace(/ GMT.*/, '');

var f = `
n011111100011111110000000000000
)011111100011111110000000000000
<101001011100000001111111111111
>100101011100000001111111111111
+100000011100000001111111111111
-100000011100000001111111111111
%100000011100000000111111111111
(100001011100000001111111111111
~100001011100000001111111111111
!100001011100000001111111111111
^100001011100000001111111111111
&100001011101000001111111111111
|100001011100100001111111111111
*100001011100010001111111111111
?100001011100000001111111111111
:100001011100000001111111111111
/100001011100000001111111111111
0011111100011111110111111111000
1011111100011111111111111111100
2011111100011111111111111111100
3011111100011111111111111111100
4011111100011111111111111111100
5011111100011111111111111111100
6011111100011111111111111111100
7011111100011111111111111111100
8011111100011111111111111111100
9011111100011111111111111111100
.000000000000000001111111111000
S000000010000000000000000000000
C000000010000000000000000000000
T000000010000000000000000000000
`
	.trim()
	.split('\n');

var ok_data = {};

var chars = [];
for (var row of f) chars.push(row[0]);

for (var row of f) {
	for (var i = 1; i < row.length; i++) {
		var c = row[0];
		var n = chars[i - 1];
		if (!(c in ok_data)) ok_data[c] = {};
		ok_data[c][n] = row[i] == 1;
		//console.log(c, n, ok[c][n]?'yes':'no')
	}
}

function ok(a, b) {
	return ok_data[a][b];
}

function* combine(list, n) {
	if (n == 1) {
		yield* list;
		return;
	}
	var output = [];
	for (var head of combine(list, n - 1)) {
		for (var item of list) {
			if (!ok(head[head.length - 1], item)) continue;
			yield head + item;
		}
	}
}

var C = Math.cos;
var S = Math.sin;
var T = Math.tan;

//for(var data=[],i=14;--i;)data.push([i,i%3-1])
//for(var data=[],i=14;--i;)data.push([i,(i/5|0)-1])
//for(var data=[],i=14;i--;)data.push([i,i%4-(i/4|0)%2])
//var data = [1, 1, 0, 0].map((n, i) => [i, n]);
var data = [5, 7, 4, 9].map((n, i) => [i, n]);
//console.log(data + '\n\n');

function test1(p, n, output) {
	return output == eval(p);
}

function test(p) {
	try {
		for (d of data) if (!test1(p, d[0], d[1])) return false;
		return true;
	} catch (err) {
		return false;
	}
}

for (let n = 1; n <= 5; n++) {
	console.log(`${shortDate()} Testing all expressions of length ${n}...`);
	for (p of combine(chars.join(''), n)) {
		if (test(p)) {
			console.log(p);
		}
	}
}
/*
for (pp of combine(chars.join(''), 4)){
  for (var i = 0; i <= pp.length; i++) {
    var p = pp.substr(0,i) + 'n' + pp.substr(i);
    if (test(p)) console.log('Answer: ' + p)
  }
}*/
