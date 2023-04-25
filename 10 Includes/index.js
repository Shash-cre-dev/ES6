//INCLUDE

//Earlier in JS to check if an element is present in an array

let numArray = [1,2,3,4,5];

console.log(numArray.indexOf(3))
//2 - location of 3 in the array

console.log(numArray.indexOf(7))
// -1 - element is not present in the array

//MODIFIED VERSION
// includes returns a boolean value of true or false

let numArray = [1,2,3,4,5];

console.log(numArray.includes(3))
//true - 3 is present in the array

console.log(numArray.includes(7))
//false - 7 is not present in the array
