// Add, subtract, multiply, and divide two numbers using the appropriate arithmetic operators.
let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));

let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
alert(sum);
alert(sub);
alert(mul); 
alert(div);

// Use comparison operators to check if two numbers are equal and if onenumber is greater than the other. 

let c = parseInt(prompt("Enter first number:"));
let d = parseInt(prompt("Enter second number:"));

let isEqual = c ===d;
let isGreater = c > d;
let isLess = c < d;
let isNotEqual = c !== d;
let isGreaterOrEqual = c >= d;
let isLessOrEqual = c <= d;

// Display the results using alert.
alert(isEqual);
alert(isGreater);
alert(isLess);
alert(isNotEqual);
alert(isGreaterOrEqual);
alert(isLessOrEqual);

// Display the results using console.log.
console,log(isEqual);
console,log(isGreater);
console,log(isLess);
console,log(isNotEqual);
console,log(isGreaterOrEqual);
console,log(isLessOrEqual);


//use logical operators to check if both conditons (e.g a > 10 and b < 5) are true.

let e = parseInt(prompt("Enter first number:"));
let f = parseInt(prompt("Enter second number:"));

let bothTrue = (e > 10) && (f < 5);
let eitherTrue = (e > 10) || (f < 5);
let notTrue = !(e > 10);
let eitherFalse = !(e > 10) && !(f < 5);
let bothFalse = !(e > 10) || !(f < 5);

// Display the results using console.log.
console.log(bothTrue);
console.log(eitherTrue);       
console.log(notTrue);
console.log(eitherFalse);
console.log(bothFalse);