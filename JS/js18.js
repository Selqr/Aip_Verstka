let employeeData = ['John', 'Smit', 'development', 'programmer', 2000];

let [firstName, lastName, department, position, salary] = employeeData;

console.log(firstName);   
console.log(lastName);    
console.log(department);  
console.log(position);    
console.log(salary);      

function getUserData() {
    return ['John', 'Smit', 'development', 'programmer', 2000];
}

let [userFirstName, userLastName, userDept, userRole, userIncome] = getUserData();

console.log(userFirstName); 
console.log(userLastName); 
console.log(userDept);      
console.log(userRole);      
console.log(userIncome);    

let employeeInfo = ['John', 'Smit', 'development', 'programmer', 2000];

let [, , employeeDept, employeeRole] = employeeInfo;

console.log(employeeDept); 
console.log(employeeRole); 

let partialArray = ['Alice', 'Smith'];
let [userFirst, userLast, userAge] = partialArray;

console.log(userFirst); 
console.log(userLast); 
console.log(userAge);   

let userInfo = ['Alice', 'Brown', 28, 'designer', 'London'];
let [name, surname, ...otherDetails] = userInfo;

console.log(name, surname); 
console.log(otherDetails);  

let employeeInfo0 = ['John', 'Smit', 'development', 'programmer'];

let [firstName0, lastNam0e, department0, role0 = 'trainee'] = employeeInfo;

console.log(firstName0);   
console.log(lastName0);    
console.log(department0);  
console.log(role0);        

function getCurrentDate() {
    let now = new Date();
    return now.getDate();
}

function getCurrentMonth() {
    let now = new Date();
    return now.getMonth() + 1;
}

function getCurrentYear() {
    let now = new Date();
    return now.getFullYear();
}

let arr1 = [];
let [year1 = getCurrentYear(), month1 = getCurrentMonth(), day1 = getCurrentDate()] = arr1;
console.log(year1, month1, day1); 

let dateArray = [2025, 12, 31];
let year, month, day; 

[year, month, day] = dateArray;
console.log(year, month, day);

let settings = {
    color: 'red',
    width: 400,
    height: 500,
};

let {color, width, height} = settings;

console.log(color);  
console.log(width);  
console.log(height); 

let settings2 = {
    color: 'red',
    width: 400,
    height: 500,
};

let {color: c, width: w, height: h} = settings2;

console.log(c); 
console.log(w); 
console.log(h);

let options = {
    width: 400,
    height: 500,
};

let {color: c1 = 'black', width: w1, height: h1} = options;

console.log(c1); 
console.log(w1); 
console.log(h1); 

function showEmployee([name, surname, department, position, salary]) {
    console.log(name, surname, department, position, salary);
}
showEmployee(['John', 'Smit', 'development', 'programmer', 2000]);

function processEmployee([firstName, lastName, ...otherInfo]) {
    console.log(firstName, lastName, otherInfo);
}
processEmployee(['John', 'Smit', 'development', 'programmer', 2000]);

function displayEmployee([name, surname, department, role = 'junior']) {
    console.log(name, surname, department, role);
}
displayEmployee(['John', 'Smit', 'development']);
displayEmployee(['Alice', 'Brown', 'marketing', 'manager']);

function hireEmployee(department, [firstName, lastName], [year, month, day]) {
    console.log(`Отдел: ${department}`);
    console.log(`Сотрудник: ${firstName} ${lastName}`);
    console.log(`Дата найма: ${day}.${month}.${year}`);
}
hireEmployee('development', ['John', 'Smit'], [2018, 12, 31]);

function displaySettings({color, width, height}) {
    console.log(color, width, height);
}
displaySettings({color: 'red', width: 400, height: 500});

