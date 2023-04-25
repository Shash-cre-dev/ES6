/**
 * Fetch - Challenge
 * 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

//ROGER THAT

//GET
fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then((response) => response.json())
    .then((data) => console.log(data))

//-o
//{postId: 1, id: 1, name: "id labore ex et quam laborum", 
//email: "Eliseo@gardner.biz", body: "laudantium enim 
//quasi est quidem magnam voluptate ipsam eos tempora 
//quo necessitatibus dolor quam autem quasi reiciendis 
//et nam sapiente accusantium"}

//POST
fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
            name: 'Comment 105',
            email: 'sk@email.com',
            body: 'The GOAT strikes back',
            postId: 1
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))

//{id: 501}