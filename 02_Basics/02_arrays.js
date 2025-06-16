const fruits = ["apple", "banana", "grapes"]
const vegetables = ["potato", "tomato", "cabbage"]

// fruits.push(vegetables) // not a better way for concatenation
// console.log(fruits);   // [ 'apple', 'banana', 'grapes', [ 'potato', 'tomato', 'cabbage' ] ]
// console.log(fruits[3]); // [ 'potato', 'tomato', 'cabbage' ]
// console.log(fruits[3][1]); // tomato

// merging using concat()
const mergedArr = fruits.concat(vegetables) // concates the array
console.log(mergedArr); // [ 'apple', 'banana', 'grapes', 'potato', 'tomato', 'cabbage' ]
console.log(mergedArr[4]) // tomato

// ... (spread operator)
const newMergedArr = [...fruits, ...vegetables] // Expands elements inside arrays or objects.
console.log(newMergedArr); // [ 'apple', 'banana', 'grapes', 'potato', 'tomato', 'cabbage' ]
console.log(newMergedArr[4]) // tomato
/* NOTE: Use spread (...) when merging arrays or objects cleanly and flexibly.
Use concat() or + for simple string joins or old-style array merging. */

// flat()
const array = [1, 2, [5, 6], 7, [8, 9, [3, 4]], 0]
const newArr1 = array.flat(1)
const newArr2 = array.flat(Infinity)
console.log(newArr1);   // [ 1, 2, 5, 6, 7, 8, 9, [ 3, 4 ], 0 ]
console.log(newArr2);   // [ 1, 2, 5, 6, 7, 8, 9, 3, 4, 0 ]
/* NOTE: flat() is an array method used to remove nested levels (like inner arrays) and turn them into a 
single flat array. */

// isArray()
console.log(Array.isArray(fruits)) // true
console.log(Array.isArray("Ansh")) // false
// NOTE: Array.isArray() checks if a variable is an array.

// Array.from() and Array.of()
console.log(Array.from("Ansh Darji"))   // ['A', 'n', 's', 'h',' ', 'D', 'a', 'r','j', 'i]
console.log(Array.of("Ansh Darji"))     // [ 'Ansh Darji' ]
/* Array.from() converts iterables into arrays, splitting them if needed;
Array.of() creates an array with exactly what you give it. */

let score1 = 95
let score2 = 85
let score3 = 68
console.log(Array.of(score1, score2, score3)); // [ 95, 85, 68 ]


let str = "Ansh";
console.log(Array.from(str));  // ['A', 'n', 's', 'h']

let obj = {name: "Ansh"};
console.log(Array.from(obj));  // [] → not iterable

/* NOTE: Array.from() only works with iterables (like strings, arrays, Sets) or array-like objects
(that have a length property). So {name: "Ansh"} is not iterable and doesn’t have a length.*/