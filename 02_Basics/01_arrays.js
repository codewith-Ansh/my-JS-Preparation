/* JavaScript arrays are resizable and can contain a mix of different data types.
(When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be 
accessed using arbitrary strings as indexes, but must be accessed using nonnegative 
integers (or their respective string form) as indexes. */

const arr1 = [5, 3, 22, "Ansh", true]
console.log(arr1[1]);       // Allowed
console.log(arr1["one"]);   // Not allowed (undefined)

// push() and pop()
arr1.push("Darji")
console.log(arr1); // [ 5, 3, 22, 'Ansh', true, 'Darji' ]
arr1.pop()
console.log(arr1); // [ 5, 3, 22, 'Ansh', true ]

// shift() and unshift()
arr1.unshift("Hello")
console.log(arr1);  // [ 'Hello', 5, 3, 22, 'Ansh', true ] 
arr1.shift()
console.log(arr1);  // [5, 3, 22, 'Ansh', true]

// join()
const arr2 = arr1.join()    // converts array object into string
console.log(arr2);          // 5,3,22,'Ansh',true

console.log(typeof arr1);   // object
console.log(typeof arr2);   // string

// Slice and Splice
const arr3 = [0, 1, 2, 3, 4, 5]
console.log("ORIGINAL: ", arr3);        // ORIGINAL:  [ 0, 1, 2, 3, 4, 5 ]   

const newArr1 = arr3.slice(1, 4)
console.log("\nAfter SLICE: ", arr3)    // After SLICE:  [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr1);                   // [ 1, 2, 3 ]

const newArr2 = arr3.splice(1, 4)
console.log("\nAfter SPLICE: ", arr3);  // After SPLICE:  [ 0, 5 ]
console.log(newArr2);                   // [ 1, 2, 3, 4 ]

/* NOTE: slice(start, end) copies part of the array without changing it, including the start
index but excluding the end index, while splice(start, count) changes the original
array by removing (or adding) items starting from the given index, and all specified
items are included. */