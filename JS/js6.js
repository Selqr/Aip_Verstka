let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
];

console.log(arr[3][2]); 
console.log(arr[1][1]); 
console.log(arr[2][0]); 
console.log(arr[0][0]); 

let arr1 = [[1, 2], [3, 4], [5, 6]];

let sum = 0;

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        sum += arr1[i][j];
    }
}

console.log(sum); 

let threeDArr = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];

let totalSum3D = 0;
for (let i = 0; i < threeDArr.length; i++) {
    for (let j = 0; j < threeDArr[i].length; j++) {
        for (let k = 0; k < threeDArr[i][j].length; k++) {
            totalSum3D += threeDArr[i][j][k];
        }
    }
}

console.log(totalSum3D);

let complexArr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];

let twoDimArray = [[1, 2, 3], [4, 5], [6]];

let sumTwoDim = 0;

for (let innerArray of twoDimArray) {
    for (let number of innerArray) {
        sumTwoDim += number;
    }
}

console.log(sumTwoDim);

let sumThreeDimFor = 0;

for (let i = 0; i < threeDimArray.length; i++) {
    for (let j = 0; j < threeDimArray[i].length; j++) {
        for (let k = 0; k < threeDimArray[i][j].length; k++) {
            sumThreeDimFor += threeDimArray[i][j][k];
        }
    }
}

console.log(sumThreeDimFor);

let arr2D = [[1, 2, 3], [4, 5], [6]];

let sum2DFor = 0;

for (let i = 0; i < arr2D.length; i++) {
    for (let j = 0; j < arr2D[i].length; j++) {
        sum2DFor += arr2D[i][j];
    }
}

console.log(sum2DFor);

let arrNumbers = [];

for (let i = 0; i < 3; i++) {
    arrNumbers[i] = []; 
    
    for (let j = 0; j < 5; j++) {
        arrNumbers[i].push(j + 1); 
    }
}

console.log(arrNumbers);

let arrSymbols = [];

for (let i = 0; i < 3; i++) {
    arrSymbols[i] = []; 
    
    for (let j = 0; j < 4; j++) {
        arrSymbols[i].push('x'); 
    }
}

console.log(arrSymbols);

let arrThreeD = [];

for (let i = 0; i < 3; i++) {
    arrThreeD[i] = []; 
    
    for (let j = 0; j < 2; j++) {
        arrThreeD[i][j] = []; 
        
        for (let k = 0; k < 5; k++) {
            arrThreeD[i][j].push(k + 1); 
        }
    }
}

console.log(arrThreeD);

let arr2 = [];

for (let i = 0; i < 3; i++) {
    arr2[i] = []; 
    
    for (let j = 1; j <= 5; j++) {
        arr2[i].push(j);
    }
}

console.log(arr2);

let arr3 = [];

for (let i = 0; i < 3; i++) {
    arr3[i] = []; 
    
    for (let j = 1; j <= 5; j++) {
        arr3[i].push(j);
    }
}

console.log(arr3);

let arr4 = [];

for (let i = 0; i < 3; i++) {
    arr4[i] = []; 
    
    for (let j = 1; j <= 5; j++) {
        arr4[i].push(j);
    }
}

console.log(arr4);

let arr5 = [];

for (let i = 0; i < 3; i++) {
    arr5[i] = []; 
    
    for (let j = 1; j <= 5; j++) {
        arr5[i].push(j);
    }
}

console.log(arr5);

let arr6 = [];

for (let i = 0; i < 3; i++) {
    arr6[i] = []; 
    
    for (let j = 1; j <= 5; j++) {
        arr6[i].push(j);
    }
}

console.log(arr6);

let arr7 = [];

for (let i = 0; i < 3; i++) {
    arr7[i] = [];
    
    for (let j = 1; j <= 5; j++) {
        arr7[i].push(j); 
    }
}

console.log(arr7);

let arr8 = [];

for (let i = 0, k = 1; i < 4; i++) {
    arr8[i] = [];
    
    for (let j = 0; j < 2; j++) {
        arr8[i].push(k++);
    }
}

console.log(arr8); 

let arr9 = [];

for (let i = 0, k = 2; i < 4; i++) {
    arr9[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr9[i].push(k);
        k += 2;
    }
}

console.log(arr9); 

let arr10 = [];
let counter = 1;

for (let i = 0; i < 2; i++) {
    arr10[i] = [];
    
    for (let j = 0; j < 2; j++) {
        arr10[i][j] = [];
        
        for (let k = 0; k < 2; k++) {
            arr10[i][j].push(counter++);
        }
    }
}

console.log(arr10); 

let arr11 = [];
let k = 1;

for (let i = 0; i < 3; i++) {
    arr11[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr11[i][j] = k;
        k++;
    }
}

console.log(arr11);

let arr12 = [];
let k1 = 1;

for (let i = 0; i < 3; i++) {
    arr12[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr12[i][j] = k1++;
    }
}

console.log(arr12);

let arr13 = [];
let k2 = 1;

for (let i = 0; i < 3; i++) {
    arr13[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr13[i][j] = k2;
        k2++;
    }
}

console.log(arr13);

let arr14 = [];
let k3 = 1;

for (let i = 0; i < 3; i++) {
    arr14[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr14[i][j] = k3;
        k3++;
    }
}

console.log(arr14);

let arr15 = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr15[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr15[i][j] = k++;
    }
}

console.log(arr15);

let arr16 = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr16[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr16[i][j] = k++;
    }
}

console.log(arr16);

let arr17 = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr17[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr17[i][j] = k++;
    }
}

console.log(arr17);

let arr18 = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr18[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr18[i][j] = k++; 
    }
}

console.log(arr18);

let arr19 = [];
let k4 = 1;

for (let i = 0; i < 3; i++) {
    arr19[i] = []; 
    
    for (let j = 0; j < 3; j++) {
        arr19[i][j] = k4;
        k4++;
    }
}

console.log(arr19);

let arr20 = [];

for (let i = 0, k = 1; i < 3; i++) {
    arr20[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr20[i][j] = k++;
    }
}

console.log(arr20);

let obj21 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

let sum21 = 0;

for (let key in obj21) {
    for (let innerKey in obj21[key]) {
        sum21 += obj21[key][innerKey];
    }
}

console.log(sum21);

let obj24 = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}

let sum24 = 0;
for (let firstKey in obj24) {
    let innerObj = obj24[firstKey];
    
    for (let secondKey in innerObj) {
        sum24 += innerObj[secondKey];
    }
}

console.log(sum24);

let students = {
    'group1': ['name11', 'name12', 'name13'],
    'group2': ['name21', 'name22', 'name23'],
    'group3': ['name31', 'name32', 'name33'],
};
console.log(students['group3'][0]);

let data26 = {
    1: [
        'data11',
        'data12',
        'data13',
    ],
    2: [
        'data21',
        'data22',
        'data23',
    ],
    3: [
        'data31',
        'data32',
        'data33',
    ],
    4: [
        'data41',
        'data42',
        'data43',
    ],
};

for (let key in data26) {
    for (let item of data26[key]) {
        console.log(item);
    }
}

let employees29 = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
for (let employee of employees29) {
    console.log(employee.name + ' - ' + employee.salary);
}
let affairs32 = {
    '2019-12-28': ['data11', 'data12', 'data13'],
    '2019-12-29': ['data21', 'data22', 'data23'],
    '2019-12-30': ['data31', 'data32', 'data33'],
}

affairs32['2019-12-29'].push('data24');
console.log(affairs32['2019-12-29']); 

let students33 = {
    'group1': {
        'subgroup11': ['student111', 'student112', 'student113'],
        'subgroup12': ['student121', 'student122', 'student123'],
    },
    'group2': {
        'subgroup21': ['student211', 'student212', 'student213'],
        'subgroup22': ['student221', 'student222', 'student223'],
    },
    'group3': {
        'subgroup31': ['student311', 'student312', 'student313'],
        'subgroup32': ['student321', 'student322', 'student323'],
    },
};