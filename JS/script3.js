let weekDays = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье'
};

console.log(weekDays[1]); 
console.log(weekDays[2]); 
console.log(weekDays[3]); 
console.log(weekDays[4]); 
console.log(weekDays[5]); 
console.log(weekDays[6]); 
console.log(weekDays[7]); 

let months = {
  1: 'Январь',
  2: 'Февраль',
  3: 'Март',
  4: 'Апрель',
  5: 'Май',
  6: 'Июнь',
  7: 'Июль',
  8: 'Август',
  9: 'Сентябрь',
  10: 'Октябрь',
  11: 'Ноябрь',
  12: 'Декабрь'
};

console.log(months);

let user = {
  name: 'Иван',
  surname: 'Иванов',
  patronymic: 'Иванович'
};

console.log(user.surname + ' ' + user.name + ' ' + user.patronymic);

let date = {
  year: 2025,
  month: 10,
  day: 7
};
console.log(date.year + '-' + date.month + '-' + date.day);

let obj = {
  '1a': 1,
  'b2': 2,
  'с-с': 3,
  'd 4': 4,
  'e5': 5
};

console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['с-с']);
console.log(obj['d 4']);
console.log(obj.e5);

let obj1 = {x: 1, y: 2, z: 3};

obj1.x = obj1.x * 2;
obj1.y = obj1.y * 2;
obj1.z = obj1.z ** 2;
console.log(obj1);

let obj2 = {};

obj2.name = 'Алексей';
obj2.age = 30;
obj2.city = 'Москва';
console.log(obj2);

let obj3 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj3);
console.log(keys);

let obj4 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj4).length);

let obj5 = {x: 1, y: 2, z: 3};
let key11 = 'y';
console.log(obj[key11]);

let obj6 = {x: 1, y: 2, z: 3};

let prop1 = 'x';
console.log(obj6[prop1]);

let obj7 = {x: 1, y: 2, z: 3};

let prop2 = 'x';
console.log(obj7[prop2]);

let key21 = 'x';

let obj8 = {
  [key21]: 1,
  y: 2,
  z: 3
};

let key31 = 'x';
let key41 = 'y';
let key51 = 'z';

let obj9 = {
  [key31]: 1,
  [key41]: 2,
  [key51]: 3
};

const arr99 = [1, 2, 3, 4, 5];
const res1 = arr99[1] + arr99[2];

console.log(res1);

let obj10 = {x: 1, y: 2, z: 3};
console.log(obj10['x']);

let obj11 = {x: 1, y: 2, z: 3};
let key33 = 'x';

console.log(obj11[key33]);

let obj12 = {x: 1, y: 2, z: 3};
let sum3 = obj12['x'] + obj12['y'] + obj12['z'];

console.log(sum3);

let obj13 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj13).length);