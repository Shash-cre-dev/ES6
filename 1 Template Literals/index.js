//TEMPLATE LITERALS

//In the past to concatenate strings

let word1 = 'Shashank';
let word2 = 'Kumar';
const fullname = word1 + ' ' + word2
console.log(fullname);

//BY USING TEMPLATE LITERALS
const fullname2 = `${word1} ${word2}`;
console.log(fullname2);

let num1 = 5;
let num2 = 7;
const con = `${num1 + num2} + ${word1}`
console.log(con) // -- 7 Shashank

//EARLIER FOR MULTILINE STRING
let example = 'hello \n' + 'world';
console.log(example)

let example2 = `${word1}
${word2}
${num1+num2}
`
//-o
//Shashank
//kumar
//7