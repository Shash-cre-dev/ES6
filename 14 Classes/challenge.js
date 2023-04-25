/** 
**Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Country.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.

**/

//ROGER THAT
//MY SOLUTION
class Player{
    constructor(Name, Country){
        this.Name = Name;
        this.Country = Country;
    }

    Born(Name, Country){
        console.log(`${Name} was born in ${Country}`)
    }
}

class TennisPlayer extends Player{
    constructor(Name, Country, Age){
        super(Name, Country);
        this.Age = Age;
    }

    Plays(Name, Age){
        console.log(`${Name} is  ${Age} years old knows how to play Tennis`)
    }

}

const messi = new Player("Messi", "Argentina");
messi("Messi", "Argentina");

const roger = new TennisPlayer("Roger Federer", "Spain", 38);
roger.Plays("Roger Federer", "Spain", 38)
roger.Born("Roger Federer", "Spain")

//EFFICIENT SOLUTION
class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
    
    introduce() {
        console.log(`${this.name} was born in ${this.country}`);
    }
}

const messi1 = new Player("Messi", "Argentina");

messi.introduce();

class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }
    
    playTennis() {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
    }
}

const roger2 = new TennisPlayer( "Roger Federer", "Spain", 38);

roger.introduce();
roger.playTennis();