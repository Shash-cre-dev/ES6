//Class with Constructor
export class Animal{
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise'){
        console.log(sound);
    }


    get metaDeta(){
        return `Type: ${this.type}, Legs: ${this.type} `
    }

    static return10(){
        return 10;
    }
}

//classes can inherit properties of other classes
//via the extend keyword

export class Cat extends Animal {
    makeNoise(sound = "meow") {
        console.log(sound)
    }
}

//FOR CREATING COSTRUCTOR OF A CHILD CLASS
//for properties inherited from parent class use super 

export class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }
}