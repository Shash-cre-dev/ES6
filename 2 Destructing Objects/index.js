const player = {
    Name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
};

//PAST WAY OF ACCESSING KEYS
//for name
console.log(player.Name);
//--Lebron James


//for club
console.log(player.club);
//--LA Lakers

//for city
console.log(player.address.city);
//--Los Angeles


//BY USING DESTRUCTING OBJECT

//keys to access inside the object named player

// const { Name, club } = player;

//same as 
player.Name
player.club

console.log(`${Name} plays for ${club}`);
//--Lebron James plays for LA Lakers

//for city
const { Name, club, address: { city } } = player;
console.log(`${Name} lives in ${city}`);
//-- Lebron James lives in Los Angeles