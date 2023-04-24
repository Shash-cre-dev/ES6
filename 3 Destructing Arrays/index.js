//DESTRUCTING ARRAYS
let names = ['Shashank', 'Developer God', 'Kumar'];

//Earlier way
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);


let [firstName, middleName, lastName] = ['Shashank', 'Developer God', 'Kumar'];
console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(firstName + middleName);
//--Shashank Developer God

//You can also reset the value
middleName = 'GOAT Developer';
console.log(firstName + middleName + lastName);
//-- Shashank GOAT Developer Kumar