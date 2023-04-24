// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sydney" }
    { name: "Tom", city: "Lisbon" }
]

//Roger That
for(const i in students){
    console.log(students.name + " " + students.city);
}

//Output
// John lives in New York
// Peter lives in Paris
// Kate lives in Sydney
// Tom lives in Lisbon