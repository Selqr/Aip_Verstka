let numbers = [4, 9, 16, 25];
let roots = numbers.map(num => Math.sqrt(num));
console.log(roots); 

let words = ['hello', 'world', 'test'];
let excitedWords = words.map(str => str + '!');
console.log(excitedWords); 

let strings = ['abc', 'def', 'ghi'];
let reversed = strings.map(str => str.split('').reverse().join(''));
console.log(reversed); 

let stringArray = ['123', '456', '789'];
let numberMatrix = stringArray.map(str => 
    str.split('').map(char => Number(char))
);
console.log(numberMatrix); 

let values = [10, 20, 30, 40];
let multiplied = values.map((num, index) => num * index);
console.log(multiplied); 

let numbers1 = [1, 2, 3, 4, 5];
let sumOfSquares = 0;

numbers1.forEach(function(num) {
    sumOfSquares += num * num;
});
console.log(sumOfSquares);

let numericValues = [3, -1, 8, -5, 12, 0, -7];
let positiveOnly = numericValues.filter(item => item > 0);
console.log(positiveOnly); 

let numberCollection = [-2, 4, -9, 7, -3, 0, 11];
let negativeValues = numberCollection.filter(element => element < 0);
console.log(negativeValues); 

let dataSet = [15, 2, 8, 12, 5, 0, -1, 9, 10];
let filteredRange = dataSet.filter(value => value > 0 && value < 10);
console.log(filteredRange); 

let textArray = ["apple", "banana", "kiwi", "strawberry", "pear", "watermelon"];
let longWords = textArray.filter(word => word.length > 5);
console.log(longWords); 

let numberSequence = [3, 5, 1, 8, 2];
let allPositive = numberSequence.every(value => value > 0);
console.log(allPositive); 

let mixedSequence = [2, -1, 7, 4];
let allPositiveMixed = mixedSequence.every(value => value > 0);
console.log(allPositiveMixed); 

let numberArray = [-5, -2, 0, -1, -8];
let hasPositive = numberArray.some(element => element > 0);
console.log(hasPositive); 

let mixedNumbers = [-3, 0, -7, 2, -4];
let containsPositive = mixedNumbers.some(item => item > 0);
console.log(containsPositive); 

let dataValues = [5, 8, 3, 12, 4];
let productCheck = dataValues.some((value, index) => value * index > 30);
console.log(productCheck); 

let dataPoints = [5, 7, 3, 4, 6];
let checkProduct = dataPoints.every((element, position) => element * position < 30);
console.log(checkProduct);

let newData = [5, 8, 3, 12, 4];
let result = newData.some((val, i) => val * i > 30);
console.log(result); 

let smallValues = [3, 7, 4, 9, 5];
let smallResult = smallValues.some((num, pos) => num * pos > 30);
console.log(smallResult); 
