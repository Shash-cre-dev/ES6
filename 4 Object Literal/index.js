//OBJECT LITERAL

function addressMaker(city, state) {
    const newAddress = {newCity: city, newState: state};
    
    console.log(newAddress);
}

addressMaker('Austin', 'Texas');

//--{newCity: "Austin", newState: "Texas"}

function addressMaker(city, state) {
    const newAdress = {city: city, state: state};
    
    console.log(newAdress);
}

addressMaker('Austin', 'Texas');

//--{city: "Austin", state: "Texas"}


//BY OBJECT LITERAL NO NEED TO ASSIGN KEYS
function addressMaker(city, state) {
    const newAdress = {city, state};
    
    console.log(newAdress);
}

addressMaker('Austin', 'Texas');

//--{city: "Austin", state: "Texas"}

//Be careful, don't change object names or object properties while 
//using object literal