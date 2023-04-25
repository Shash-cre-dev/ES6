// PADSTART AND PADEND

//it is used to add value to the start and end of the string

let example = 'Shashank'

console.log(example);
//Shashank


//To the start with padStart()
console.log(example.padStart(15, 'a'));
//aaaaaaaShashank
//a -  starting character
//15 - total length of the string

//if no space left to add, the original string is printed

let example2 = 'Dylan Israel';
console.log(example2.endStart(10, 'a'));
//Dylan Israel

//To the back with padEnd()
console.log(example.padEnd(15, 'a'));
//Shashankaaaaaaa
//a -  ending character
//15 - total length of the string

//if no space left to add, the original string is printed
