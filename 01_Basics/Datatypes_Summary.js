// --- Primitive ---
// mainly there are 7 primitive datatypes
// String, Number, BigInt, Boolean, null, undefined, Symbol


// --- Reference or Non-Primitive datatypes ---
// mainly there are 3 non-primitive datatypes
// arrays, objects, functions


// let score = 100 // Number
// let score2 = 100.25 // Number (No matter either int or decimal)
// console.log(typeof(score, score2)) // number

// const isLoggedIn = false // boolean
// const outsideTemp = null // object
// let userEmail   // undefined

// console.log(typeof(isLoggedIn));
// console.log(typeof(outsideTemp));
// console.log(typeof(userEmail));

// const id = Symbol("555")
// const id2 = Symbol("555")
// console.log(id == id2) // false because both are not same
/*  Symbol is a primitive data type in JavaScript used to create unique and immutable
    identifiers (mostly for object properties). */

// const bigNumber = 5555555n; // Adding 'n' at the end make it the BigInt from a Number
// console.log(typeof bigNumber) // bigint

// let myFunction = function(){
//     console.log("Hello world!");
// }

// myFunction() // Hello world!
// console.log(typeof myFunction) // Function because it's itself a datatype

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Stack (Primitive)  and Heap (Non-Primitive)

// let myName = "Ansh Darji";
// let nickName = myName; // Value gets copied

// console.log(nickName); // Ansh Darji

let userOne = {
    email: "ansh123@gmail.com",
    upi: "user@ybl"
}
console.log(typeof userOne) // object
console.log(userOne)
console.log(userOne.email)

let userTwo = userOne
userTwo.email = "abcd321@gmail.com"

console.log(userOne) /* Value get changed to abcd321@gmail.com as it is pointing to 
the heap memory where email is changed to abcd321@gmail.com */
console.log(userTwo) 