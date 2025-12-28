function showMyName() {
    console.log('Ваше Имя');
}
showMyName(); 

function sumOneToHundred() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}
sumOneToHundred();

function cubeNumber(num) {
    console.log(num ** 3);
}
cubeNumber(2); 

function checkNumberSign(num) {
    if (num > 0) {
        console.log('+++');
    } else if (num < 0) {
        console.log('---');
    } else {
        console.log('ноль');
    }
}
checkNumberSign(5);

function calculateThreeNumbers(value1, value2, value3) {
    console.log(value1 + value2 + value3);
}
calculateThreeNumbers(10, 20, 30);

function computeSum(a, b, c) {
    console.log(a + b + c);
}
let param2 = 2;

function func(num = 5) {
    console.log(num * num);
}
func(3); 

function getCube(number) {
    return number ** 3;
}
let res = getCube(3);
console.log(res); 

function sqrt(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}
let result = round(sqrt(2));
console.log(result); 

javascript
function func(num) {
    return num;
    let res = num ** 2;  
    return res;          
}
console.log( func(3) ); 

function func(num) {
    if (num <= 0) {
        return Math.abs(num);  
    }
    return num ** 2;           
}
console.log( func(10) ); 

function func(num) {
    let sum = 0;
    
    for (let i = 1; i <= num; i++) {
        sum += i;
        return sum;  
    }
}
console.log( func(5) ); 

function countDivisionsUntilLessThanTen(number) {
    let count = 0;
    let current = number;
    while (current >= 10) {
        current = current / 2;
        count++;
    }
    return count;
}
console.log( countDivisionsUntilLessThanTen(100) );

function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}
console.log(func(3, 4));

function areAllEven(arr) {
	for (let elem of arr) {
		if (elem % 2 !== 0) {
			return false;
		}
	}
	return true;
}
console.log(areAllEven([2, 4, 6, 8])); 