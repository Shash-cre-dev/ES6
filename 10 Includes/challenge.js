/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

//ROGER THAT
const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

for(i of listIngredients){
    if(listIngredients.includes(i)){
        console.log("We are going to make a chocolate cake")
    }

    else{
        console.log("We can't make a chocolate cake because we are missing the ingredient chocolate")
    }
}

//LEARNING - Read the Question Properly (again and again)

//SOLUTION
const listIngredients2 =  [ "flour", "sugar", "eggs", "butter" ];

if( listIngredients.includes("chocolate")) {
    console.log("We are going to make a chocolate cake" );
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate" );
}