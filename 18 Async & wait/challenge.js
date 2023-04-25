//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

//const apiUrl = "https://api.chucknorris.io/jokes/random";


//ROGER THAT

//MY WAY
fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((jokes) => console.log(data))

//SOLUTION
const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    console.log(data.value);
}

getJoke();