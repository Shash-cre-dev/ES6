//PROMISES

//Used on network requests to fetch data from an API or
//used in case of some asynchronous function that one is trying to run

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;
            
            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}
//resolve() - when everything is error free 
//reject() - when an error occurs

//Promises are executed by
buyFlightTicket().then().catch();
//if no error occurs after calling the function buyFlightTicket and then() function is executed

//if an error occurs after calling the function buyFlightTicket and catch() function is executed

//values can be passed to then() and catch()
buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );

//the parameter of then highlights whatver present in resolve
//here success highlights "Thank you, your payment was successful"

//the parameter of catch highlights whatver present in reject
//here error highlights "Sorry your payment was not successful"

//-o Thank you, your payment was successful"
//resolve will run 
//because no error as const error = false


const buyFlightTicket1 = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = true;
            
            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

buyFlightTicket1()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );


//here reject will run as const error = true
//-o "Sorry your payment was not successful"