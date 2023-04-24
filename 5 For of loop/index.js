//NEWER WAY TO ITERATE THROUGH ITERABLES

//FOR OF LOOP

//here array

let incomes = [62000, 67000, 75000];
let total = 0;

//For finding total income
for (const i of incomes) {
    console.log(i);
    total += i;
}

console.log(total);

//62000
//67000
//75000
//204000

//here string
let fullName = "Shashank GOAT Developer Kumar";


for (const char of fullName) {
    console.log(char);
}

//S
//h
//a
//s
//h
//a
//n
//k
//G
//O
//A
//T
//D
//e
//v
//e
//l
//o
//p
//e
//r
//K
//u
//m
//a
//r