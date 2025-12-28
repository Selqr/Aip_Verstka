function calculateAverage(...numbers) {
    if (numbers.length === 0) return 0; 
    
    let total = 0;
    for (let value of numbers) {
        total += value;
    }
    
    return total / numbers.length;
}
console.log(calculateAverage(1, 2, 3));  

function findAverage(...values) {
    if (values.length === 0) return 0;
    return values.reduce((sum, current) => sum + current, 0) / values.length;
}

console.log(findAverage(2, 4, 6, 8)); 

function sumExceptFirst(first, ...others) {
    let total = 0;
    for (let num of others) {
        total += num;
    }
    return total;
}
console.log(sumExceptFirst(10, 1, 2, 3)); 

function unite(...arrays) {
    return arrays;
}

let mergedResult = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(mergedResult); 

function combineArrays(...inputs) {
    for (let item of inputs) {
        if (!Array.isArray(item)) {
            throw new Error('Все аргументы должны быть массивами');
        }
    }
    return inputs;
}
console.log(combineArrays([1], ['a'], [true])); 

function merge(...arrays) {
    return [].concat(...arrays);
}

let combined = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(combined); 
