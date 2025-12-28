test(
    function() { return 1; },
    function() { return 2; },
    function() { return 3; }
);

function test(func1, func2, func3) {
    console.log( func1() + func2() + func3() ); 
}

function testAlpha(fxA, fxB, fxC) {
    return fxA() + fxB() + fxC();
}

function func1() {
    return 1;
}

function func2() {
    return 2;
}

function func3() {
    return 3;
}

console.log( testAlpha(func1, func2, func3) ); 

let func1 = function() {
    return 1;
};

let func2 = function() {
    return 2;
};

let func3 = function() {
    return 3;
};

console.log( testAlpha(func1, func2, func3) ); 

function testOmega(fnOmega) {
    console.log( fnOmega(3) );
}
testOmega(function(nVal) {
    return nVal * nVal * nVal; 
});

function testOmega(fnOmega) {
    console.log( fnOmega(3) );
}

function func(numX) {
    return numX ** 3;
}
testOmega(func);

function testOmega(fnOmega) {
    console.log( fnOmega(3) );
}

let func = function(numY) {
    return numY ** 3;
};
testOmega(func);

function test1(num, func1, func2) {
	return func1(num) + func2(num);
}

let result = test1(
	3, 
	function(num) {
		return num * num; 
	}, 
	function(num) {
		return num * num * num; 
	}
);

console.log(result); 

function test2(num, func1, func2) {
	return func1(num) + func2(num);
}

console.log(test2(3, num => num * num, num => num * num * num)); 

function testSigma(arrSigma, handlerSigma) {
    for (let idx = 0; idx < arrSigma.length; idx++) {
        arrSigma[idx] = handlerSigma(arrSigma[idx]);
    }
    return arrSigma;
}

let cubeResult = testSigma([2, 3, 4], function(xNum) {
    return xNum * xNum * xNum; 
});

console.log(cubeResult); 

function funcAlpha(xNum, yNum) {
    function square(num) {
        return num * num;
    }
    function cube(num) {
        return num * num * num;
    }
    return square(xNum) + cube(yNum);
}
console.log(funcAlpha(2, 3));

let results = filter([1, 2, 3, 4, 5], elem => elem > 0);

