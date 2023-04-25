//ARROW FUNCTIONS

//TWO TYPES FUNCTIONS IN THE PAST 
//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}


//ARROW FUNCTION

const dinnerMenu = () => {
    return "I'm going to eat a burger for dinner";
}

console.log( dinnerMenu() );

//I'm going to eat a burger for dinner


//MODIFIED ARROW FUNCTION

const dinnerMenu1 = (food) => `I'm going to eat a ${food} for dinner`;

console.log( dinnerMenu("chicken salad") );

//I'm going to eat a chicken salad for dinner


//if single parameter present, no need to use ()
const dinnerMenu2 = food => `I'm going to eat a ${food} for dinner`;

console.log( dinnerMenu("chicken salad") );

//I'm going to eat a chicken salad for dinner


//For two parameters or more use parenthesis
//eg (food, drink)