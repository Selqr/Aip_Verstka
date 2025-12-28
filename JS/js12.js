let num = 1;

function func() {
    console.log(num); 
}

num = 2;
func(); 

function createCounter() {
    let count = 0;
    
    return function() {
        count++; 
        return count;
    };
}

const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

let num1 = 1;
function func1() {
    console.log(num1);
}
function func2() {
    let num = 100; 
    console.log(num1); 
    func1(); 
}
func2();

for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); 
    }, 100);
}

let externalValue = "внешняя";
function showValue() {
    let localValue = "локальная";
    console.log(localValue);   
    console.log(externalValue); 
}
showValue();

function test() {
    let value1 = 1;
    let value2 = 2;
    
    return function() {
        return value1 + value2;
    }
}
let calcFunc = test();
console.log(calcFunc()); 

function test() {
    let valueA = 1;
    let valueB = 2;
    
    return function() {
        return valueA + valueB;
    }
}
console.log(test()()); 

function test() {
    let valueX = 1;
    
    return function() {
        return valueX + valueY;
    }
}
let valueY = 2;
let resultFunc = test();
console.log(resultFunc()); 

function test() {
    let innerVar = 1;
    
    return function() {
        return innerVar;
    }
}
let outerVar = 2;
let myFunc = test();
console.log(myFunc()); 

function createCounter() {
    let counterValue = 0;
    
    return function() {
        counterValue += 1;
        return counterValue;
    };
}
let myCounter = createCounter();
console.log(myCounter()); 
console.log(myCounter()); 
console.log(myCounter()); 

function createDecrementor() {
    let currentValue = 10;
    
    return function() {
        currentValue -= 1;
        console.log(currentValue);
    };
}

let decrementFunc = createDecrementor();
decrementFunc(); 
decrementFunc(); 
decrementFunc(); 

let globalCount = 0;
		
function test() {
	return function() {
		console.log(globalCount);
		globalCount++;
	};
}

let funcRef = test;

let funcA = funcRef();
let funcB = funcRef();
funcA(); 
funcB(); 
funcA(); 
funcB(); 