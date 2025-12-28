console.log(arr106);
console.log(Math.pow(2, 10));

console.log(Math.sqrt(245));

let arr109 = [4, 2, 5, 19, 13, 0, 10];
let sumCubes = 0;
for (let i = 0; i < arr109.length; i++) {
  sumCubes += Math.pow(arr109[i], 3);
}
console.log(Math.sqrt(sumCubes));
let root110 = Math.sqrt(379);
console.log(Math.round(root110));        
console.log(root110.toFixed(1));         
console.log(root110.toFixed(2));         

let root111 = Math.sqrt(587);
let result111 = {
  floor: Math.floor(root111),
  ceil: Math.ceil(root111)
};
console.log(result111);
let numbers = [4, -2, 5, 19, -130, 0, 10];
let min112 = Math.min(...numbers);
let max112 = Math.max(...numbers);
console.log('Минимальное:', min112);
console.log('Максимальное:', max112);
let randomInt = Math.floor(Math.random() * 100) + 1;
console.log(randomInt);

let arr114 = [];
for (let i = 0; i < 10; i++) {
  arr114.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr114);

let a = 7;
let b = -3;
let diff = Math.abs(a - b);
console.log(diff);

let str116 = 'js';
console.log(str116.toUpperCase());

let str117 = 'JS';
console.log(str117.toLowerCase());

let str = 'i study javascript';

let word1_substring = str.substring(2, 7);  
let word2_substring = str.substring(8, 18);  

console.log('substring:');
console.log(word1_substring);  
console.log(word2_substring);  

let url1 = 'http://example.com';
let url2 = 'https://example.com';
let url3 = 'ftp://example.com';
let url4 = 'example.com';

console.log(url1.startsWith('http://')); 
console.log(url2.startsWith('http://')); 
console.log(url3.startsWith('http://')); 
console.log(url4.startsWith('http://'));
function startsWithHttp(str) {
    return str.startsWith('http://');
}

console.log(startsWithHttp('http://google.com')); 

let str1 = '1-2-3-4-5';
let result1 = str1.replace(/-/g, '.');
console.log(result1); 

let str37 = '1-2-3-4-5';
let arr37 = str37.split('-');
console.log(arr37); 
let arr37Numbers = str37.split('-').map(Number);
console.log(arr37Numbers); 

let arr39 = [1, 2, 3, 4, 5];
let str39 = arr39.join('-');
console.log(str39); 
console.log(typeof str39); 

let arr40 = [1, 2, 3];

console.log(arr40[0]);
let firstElement = arr40[0];
console.log(firstElement); 
console.log(arr40); 

let arr41 = [1, 2, 3];
console.log(arr41[arr41.length - 1]); 
console.log(arr41.at(-1));
let lastElement = arr41[arr41.length - 1];
console.log(lastElement); 
console.log(arr41); 

let arr42 = [1, 2, 3];
arr42.push(4, 5, 6);
console.log(arr42); 
let arr42Alt = [1, 2, 3];
arr42Alt.push(4);
arr42Alt.push(5);
arr42Alt.push(6);
console.log(arr42Alt); 
let arr42Concat = [1, 2, 3];
let newArr = arr42Concat.concat(4, 5, 6);
console.log(newArr); 

let arr44 = [1, 2, 3, 4, 5];
let newArr44 = arr44.slice(0, 3);
console.log(newArr44); 

let arr45 = [1, 2, 3, 4, 5];
let lastTwo45 = arr45.slice(3);
console.log(lastTwo45); 

let arr46 = [1, 2, 3, 4, 5];
arr46.splice(1, 2);
console.log(arr46); 

let arr47 = [1, 2, 3, 4, 5];
arr47.splice(3, 0, 'a', 'b', 'c');
console.log(arr47); 

let arr48 = [1, 2, 3, 4, 5];
arr48.splice(1, 0, 'a', 'b');
arr48.splice(6, 0, 'c');
arr48.splice(8, 0, 'e');
console.log(arr48);

let arr49 = [1, 2, 3, 4, 5];
let hasThree1 = arr49.includes(3);
console.log(hasThree1); 

let obj = {a: 1, b: 2, c: 3};
let keys = Object.keys(obj);
console.log(keys); 


let num = 12345;
let arr = String(num).split(''); 
let sum = 0;
for (let digit of arr) {
    sum += Number(digit); 
}
console.log(sum); 