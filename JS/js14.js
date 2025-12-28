let numbers = [1, 2, 3, 4, 5];

function printArray(elements) {
    console.log(elements[0]); 
    
    if (elements.length > 1) {
        printArray(elements.slice(1));
    }
}
printArray(numbers);

let values = [1, 2, 3, 4, 5];

function sumOfSquares(arr) {
    if (arr.length === 0) return 0;
    
    let first = arr[0];
    let square = first * first;
    
    return square + sumOfSquares(arr.slice(1));
}
console.log(sumOfSquares(values)); 

let complexObj = {
    a: 1, 
    b: {c: 2, d: 3, e: 4}, 
    f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}
};

function traverseObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            traverseObject(obj[key]); 
        } else {
            console.log(obj[key]); 
        }
    }
}
traverseObject(complexObj);

let nestedArray = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

function flattenArray(arr) {
    let result = [];
    
    for (let element of arr) {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element));
        } else {
            result.push(element);
        }
    }
    return result;
}
console.log(flattenArray(nestedArray)); 

let deepObject = {
    a: 1, 
    b: {c: 2, d: 3, e: 4}, 
    f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}
};

function sumObjectValues(obj) {
    let total = 0;
    
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            total += sumObjectValues(obj[key]);
        } else {
            total += obj[key];
        }
    }
    
    return total;
}
console.log(sumObjectValues(deepObject));

let nestedStrings = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

function concatStrings(arr) {
    let result = '';
    
    for (let element of arr) {
        if (Array.isArray(element)) {
            result += concatStrings(element);
        } else {
            result += element;
        }
    }
    
    return result;
}
console.log(concatStrings(nestedStrings)); 

let nestedArray1 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function squareElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            squareElements(arr[i]); 
        } else {
            arr[i] = arr[i] * arr[i]; 
        }
    }
    return arr;
}

console.log(squareElements(nestedArray1));
