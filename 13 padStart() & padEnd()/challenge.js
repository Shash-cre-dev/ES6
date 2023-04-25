let example = 'YouTube.com/CodingTutorials360';

console.log(example.padStart(100));
//Here since no character is passed, it will add blank spaces till
//length of the string becomes 100

// the console only shows 'YouTube.com/CodingTutorials360';
//as blank spaces are skipped, but if .length used -o will be 100



console.log(example.padEnd(1));
// nothing happens  as the length of the original string is more than what's mentioned when passed
//'YouTube.com/CodingTutorials360';
