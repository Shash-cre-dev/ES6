// FETCH

// to make API calls easier , and saving trouble from using jQuery 
//for receiving and sending data


//GET
fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))

//fetch takes data(input) from an API endpoint
//then it mapps the body content out of with .json
//then get the data

//-o
//{postId: 1, id: 1, name: "id labore ex et quam laborum", 
//email: "Eliseo@gardner.biz", body: "laudantium enim 
//quasi est quidem magnam voluptate ipsam eos tempora 
//quo necessitatibus dolor quam autem quasi reiciendis 
//et nam sapiente accusantium"}

//POST
fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: 'Shashank',
            email: 'sk@email.com',
            body: 'Siuuuuuu'
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))

//{id: 501}