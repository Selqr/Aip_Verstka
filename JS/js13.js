!function() {
    console.log('!');
}();

+function() { console.log('Плюс'); }();
-function() { console.log('Минус'); }();
~function() { console.log('Тильда'); }();
void function() { console.log('Void'); }();

let resultValue = function() {
    return '!';
}();	
console.log(resultValue);

let funcExpression = function() {
    return '!';
};		
console.log(funcExpression);

let myFunction = function() {
    return '!';
};		
console.log(myFunction());

let total = function() {return 1;}() + function() {return 2;}();
console.log(total);

let output = (function() {
    return '!';
}());
console.log(output);

let funcObj = (function() {
    return '!';
});
console.log(funcObj());

(function(num1, num2) {
    console.log(num1 + num2);
})(1, 2);

(function(a, b) {
    console.log(a + b);
}(1, 2)); 
let sum = (function(x, y) {
    return x + y;
})(10, 20);
console.log(sum); 

(function() {
    return function() {
        return function() {
            console.log('!');
        };
    };
})()()();

(function(num1) {
    return function(num2) {
        console.log(num1 + num2);
    };
})(1)(2);

let text = 'str';
(function() {
    console.log(1);
})();

let myText = 'text'

;(function() {
    console.log('Безопасный вызов');
})();

let counterFunction = (function() {
    let currentValue = 1;
    
    return function() {
        console.log(currentValue);
        currentValue += 1;
    };
})();

counterFunction(); 
counterFunction(); 
counterFunction(); 

let cycleCounter = (function() {
    let count = 1;
    const MAX = 5;
    
    return function() {
        console.log(count);
        count = (count % MAX) + 1; 
    };
})();

for (let i = 0; i < 8; i++) {
    cycleCounter();
}
