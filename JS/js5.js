let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	console.log(elem);
}
console.log(" "); 
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(key); 
}
console.log(" "); 
for (let key in obj) {
	console.log(obj[key]); 
}
console.log(" "); 
let i = 1;

while (i <= 100) {
	console.log(i);
	i++;
}
console.log(" "); 
let ie = 11;
while (ie <= 33) {
	console.log(ie);
	ie++;
}
console.log(" "); 
let id = 100;
while (id >= 1) {
	console.log(id);
	id--;
}
console.log(" "); 
let num = 5;
console.log(num);
while (num < 1000) {;
	num*=3;
	console.log(num);
}
console.log(" "); 
for (let i = 0; i <= 100; i += 2) {
	console.log(i);
}
console.log(" "); 
for (let i = 0; i <= 100; i += 2) {
	console.log(i);
}
console.log(" "); 
for (let i = 1; i <= 99; i += 2) {
	console.log(i);
}
console.log(" "); 
for (let i = 100; i >=0; i--) {
	console.log(i);
}

console.log(" "); 
let arr1 = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log(" ");
let arr2 = ['a', 'b', 'c', 'd', 'e'];

for (let i = 1; i < arr2.length - 1; i++) {
    console.log(arr2[i]);
}

console.log(" ");
let arr3 = ['a', 'b', 'c', 'd', 'e'];

for (let i = arr3.length - 1; i >= 0; i--) {
    console.log(arr3[i]);
}

console.log(" ");
let arr4 = [2, 5, 9, 15, 1, 4];

for (let elem of arr4) {
    if (elem > 3 && elem < 10) {
        console.log(elem);
    }
}

console.log(" ");
let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};

for (let key in obj) {
    if (obj1[key] % 2 !== 0) {
        console.log(obj1[key]);
    }
}

console.log(" ");
let res = 0;

for (let i = 2; i <= 100; i+=2) {
	res = res + i;
}

console.log(res);

console.log(" ");
let res1 = 0;

for (let i = 1; i <= 99; i+=2) {
	res1 = res1 + i;
}

console.log(res1);