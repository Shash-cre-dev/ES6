//SPREAD OPERATOR (...)
//copies the content of the mentioned 

//FOR ARRAYS

let contacts = ["Mary", "Joel", "Danny"];
// here are your contacts

let personalFriends = contacts;
//here are your Personal Friends


//Whenever we push into contacts
//personalFriends gets also changed
contacts.push("John");
console.log(personalFriends);

//["Mary", "Joel", "Danny", "John"]

//This occurs as personalFriends references the original array contacts, any changes reflected in
//contacts will be reflected in personalFriends as well


//To avoid changing the personalFriends when a great number of new contact are added
//we use spread operator

let personalFriends = [ ...contacts ];
contacts.push("John");
console.log(personalFriends);

//["Mary", "Joel", "Danny"]

//personalFriends didn't changed 

//by using spread operator we are creating a copy of original array contacts and storing it in
//personalFriends, so any new changes won't be reflected

let personalFriends = [ "David", ...contacts, "Lily" ];
console.log(personalFriends);

//["David", "Mary", "Joel", "Danny", "Lily"]


//FOR OBJECTS
let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

//creating a new object with copying the contents of person (...)
//and adding new keys
let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}
console.log(employee);

//{name: "Adam", age: 25, city: "Manchester", salary: 50000, position: "Software Developer"}