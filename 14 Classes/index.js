//CLASSES 

//introduced in JS to support OOP

import { Animal, Cat } from './animal.js';

//creating an instance of the animal class
let cat = new Animal('Mammal', 4);

//Calling Cat properties
console.log(cat)
console.log(cat.type)
//mammal
console.log(cat.legs)
//4

//changing values
cat.legs = 3;
console.log(cat.legs);
//3

//calling function
cat.makeNoise();
//Loud Noise
cat.makeNoise('Meow');
//"Meow"

//calling static elements
console.log(Animal.return10());
//10
//static elements don't require any instance to call them

console.log(cat.metaData)
//Type: Cat, Legs: 4


//Using inheritance
let cat = new Cat('Cat', 4);
cat.makeNoise();
//meow

//can call functions of parent class from the child class
console.log(cat.metaData);
//Type: Cat, Legs: 4
