/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
*/


//ROGER THAT
//MY WAY

const Intro = (Name, Age) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;
            
            if( error ) {
                reject("No Data on user Found")
            } else {
                resolve(`${Name} is ${Age} years old`);
            }
        }, 4000)
    })
}

//for resolve
Intro("Shashank", 20).then().catch()
//Shashank is 20 years old

const Intro2 = (Name, Age) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = true;
            
            if( error ) {
                reject("No Data on user Found")
            } else {
                resolve(`${Name} is ${Age} old`);
            }
        }, 4000)
    })
}

//I tried two ways for reject
Intro2().then().catch()
//No Data on user Found

Intro2("Shashank", 20).then().catch()
//No Data on user Found

//MY OWN SOLUTION IS CORRECT AND VERIFIED

//ANOTHER WAY - SOLUTION
const userData = new Promise((resolve, reject) => {
    const error = false;
    
    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Shashank',
            age: 20,
            email: 'Shash@email.com'
        });
    }
});

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

//for resolve
//{firstName: 'Shashank', age: 20, email: 'Shash@email.com'}

const userData2 = new Promise((resolve, reject) => {
    const error = false;
    
    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Shashank',
            age: 20,
            email: 'Shash@email.com'
        });
    }
});

userData2
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

//for reject
//'500 Level Error'

