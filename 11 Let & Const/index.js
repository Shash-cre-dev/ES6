//LET AND CONST

if (false) {
    var example = 5;
}

console.log(example)

//null
//This is variable hoisting

//What JS actually sees
/*
var example;

if (false) {
    example = 5;
}
*/

//Hoisting is a JavaScript mechanism where variables and function 
//declarations are moved to the top of their scope before code execution.

//JavaScript Declarations are Hoisted
//In JavaScript, a variable can be declared after it has been used.

//JavaScript Initializations are Not Hoisted
//JavaScript only hoists declarations, not initializations.

//In other words; a variable can be used before it has been declared.

//SOLVED BY USING let and const

//Variables defined with let and const are hoisted to the top of the block, but not initialized.

//Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

if (false) {
    let example = 5;
}

console.log(example)

//ReferenceError: example is not defined (/index.js:7)
//Using a let variable before it is declared will result in a ReferenceError.


const example = 5;
example = 10;
console.log(example)

//Error: SyntaxError: unknown: "example" is read-only (/index.js:1)
//Using a const variable before it is declared, is a syntax error, so the code will simply not run.


//When using const one can't modify the data types 

//But can change some properties with regards to array and objects

//Pushing elemnets into const array, adding keys to an const object


//GOOD PRACTICE

// Declare Your Variables At the Top !
// Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

// If a developer doesn't understand hoisting, programs may contain bugs (errors).

// To avoid bugs, always declare all variables at the beginning of every scope.

// Since this is how JavaScript interprets the code, it is always a good rule.