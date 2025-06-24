const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNumbers.map( (num) => num + 10);

console.log(newNum);    // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
console.log(myNumbers);

/* NOTE: filter() selects elements based on a condition (returns subset), while map()
transforms every element (returns same-length array); filter uses a true/false callback,
map returns a new value for each element. */

// chaining of map/filter

const newArray = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10];

const newValues = newArray.map((num) => num * 10).map((num) => num + 2).filter( (num) => num > 40); 
console.log(newValues); // [ 42, 52, 62, 72, 82, 92, 102 ]