/*
    **** Challenge ****
    
    For this challenge destruture the following object.
*/

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}


//let's destruct student

const { Name, age, projects:{diceGame} } = student

console.log(` Her Name is ${Name} her age is ${age} and she is creating a ${diceGame}`);