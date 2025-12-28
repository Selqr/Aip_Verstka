function func() {
	return '!';
}

console.log(func());  
console.log(func);

function func() {
    return 'Это строка из функции func!';
}

console.log(func()); 

function func1() {
    return 3;
}
let func2 = func1;
console.log(func1() + func2()); 

console.log(func1 === func2); 

console.log(func1()); 
console.log(func2()); 

function func3() {
	console.log('!');
}

let func4 = function() {
	console.log('!');
};

myFunc(); 
function myFunc() {
	console.log("Это Function Declaration!");
}

myFunc(); 

let myFunc = function() {
	console.log("Это Function Expression!");
};

let func11 = function() { console.log('!'); };
let func21 = function() {
	console.log('!');
};

function func31() {
	console.log('!');
}

let test = function() {
    console.log('!');
};

let test1 = function func() {
    console.log('!');
};

let test3 = function func00() {
    console.log(func); 
};

test3();   
func00();   

console.log(
	function func7() {
		console.log('!');
	}
);

-1-
function func5() {
	console.log('!');
}

1
function func6() {
	console.log('!');
}

function func8() {
	console.log('!');
}
+1;