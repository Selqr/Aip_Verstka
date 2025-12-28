let test = 0;

if (test > 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

if (test < 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

if (test >= 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

if (test <= 10) {
	console.log('+++');
} else {
	console.log('---');
}

let test1 = 10;
if (test == 10) {
	console.log('+++');
} else {
	console.log('---'); 
}

let test11 = 1;
let test22 = 2;

if (test22 > test11) {
	console.log('test22 больше'); 
} else {
	console.log('test11 больше');
}

if (test22 == test11) {
	console.log('равны'); 
} else {
	console.log('неравны');
}

let test3 = 'abc';
let test4 = 'abcd';

if (test3 == 'abc') {
	console.log('равно'); 
} else {
	console.log('неравно');
}

if (test4 == 'abcd') {
	console.log('равно'); 
} else {
	console.log('неравно');
}

let test5 = '123';
let test6 = 123;

if (test5 == test6) {
	console.log('+++'); 
} else {
	console.log('---');
}

if (3 !== 3) {
	console.log('+++');
} else {
	console.log('---'); 
}

if ('3' !== 3) {
	console.log('+++'); 
} else {
	console.log('---');
}

let num1 = 2;
let num2 = 3;

if (num1 == 2 && num2 == 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 3;

if (num > 0 && num < 5 || num > 10 && num < 20) {
	console.log('+++');
} else {
	console.log('---');
}