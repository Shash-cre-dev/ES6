//SETS

//Sets are unique lists - (where each elemnets appears once)
//Sets are iterable, for each loop can be used

const exampleSet = new Set([1,1,1,1,2,2,2,2]);

console.log(exampleSet);
//-o set

console.log(exampleSet.size);
//2 - as only two unique values in the set

//adding elements to the set
exampleSet.add(7);
exampleSet.add(5).add(17);

//removing values 
console.log(exampleSet.delete(5));
//returns a boolean value, if element found then deleted - true


//checking elements of the set
//returns a boolean depending upoon whether the set contains the element
//or not

console.log(exampleSet.has(5));
//true

//reseting the set
exampleSet.clear();
//all elements are deleted 

