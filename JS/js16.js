let numbers = [1, 2, 3, 4, 5];

function sumFive(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

let total = sumFive(...numbers);
console.log(total);

function compute(n1, n2, n3, n4, n5, n6, n7, n8) {
    return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}
console.log( compute(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );

let valuesArray = [3, 7, 1, 9, 4, 2];
let smallestValue = Math.min(...valuesArray);
console.log(smallestValue); // 1

let dataSet = [15, 8, 42, 3, 27];
let minimum = Math.min(...dataSet);
let maximum = Math.max(...dataSet);
console.log(`Минимум: ${minimum}, Максимум: ${maximum}`); 

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let resultArray = ['a', ...array1, 'b', 'c', ...array2];
console.log(resultArray);

let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];

let combined = ['a', ...firstArr, ...firstArr, 'b', 'c'];
console.log(combined);

let original1 = [1, 2, 3];
let extended1 = [...original1, 4, 5, 6];

let finalArray = ['a', 'b', 'c', ...extended1];
console.log(finalArray);

let sourceArray = [1, 2, 3];
let copiedArray = [...sourceArray];
console.log(copiedArray);

let resultArray1 = [...'12345'];
console.log(resultArray1);

let mixedArray = ['a', ...'12345'];
console.log(mixedArray);

let combinedArray = [...'12345', ...'56789'];
console.log(combinedArray);