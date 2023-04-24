function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States'
    };
    
}

addressMaker({city: 'Austin', state: 'Texas'});

//Q) console the new city, new state and the country with it

function addressMaker(address) {
    const {city, state} = address;

    const newAddress = {city, 
        state, 
        country: 'United States'
    };

    console.log(`The city is ${newAddress.city} the state is ${newAddress.state} and the country is ${newAddress.country}`);
}

addressMaker({city: 'Austin', state: 'Texas'});


