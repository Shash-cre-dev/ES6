//REST OPERATOR

//It's used in the case when the user doen't know how many inputs will be provided to a function

function add(nums) {
    
    console.log(nums);
}

add(4)

//In the past for multiple arguments

function add(nums) {
    
    console.log(arguments);
}

add(4, 5, 7, 8, 12)

//arguments object used

//{0: 4, 1: 5, 2: 7, 3: 8, 4: 12}
//It's not iterable


//USING REST OPERATOR (...)
function add(...nums) {
    
    console.log(nums);
}

add(4, 5, 7, 8, 12)
//[4, 5, 7, 8, 12]
//it's iterable