// OBJECTS
// constructor call
// object literal

// ----- object literal ----- //

const mySym = Symbol("Key1");
const user = {
    name: "Ansh Darji",
    age: 19,
    location: "Halol",
    email: "ansh@gmail.com",
    isLoggenIn: false,
    "id no": 22,
    lastLoginDays: ["Monday", "Wednesday"],
    [mySym]: "myKey",                      // For symbols, Syntax is different
}

// accessing object members
console.log(user);
console.log(user.name);     // Ansh Darji
console.log(user["name"]);  // Ansh Darji
// console.log(user.id no); // Error
console.log(user["id no"]); // 22
/* here "id no" can only accessible by using ["item"] method not by dot(.) method.
and every key work as a string in background */

console.log(user[mySym]);   // myKey

// changing the values of object members
user.age = 18;
console.log(user);

// freeze functionality
// Object.freeze(user)     // Object.freeze() is used to make an object immutable meaning you cannot add, remove, or change any of its properties.
user.age = 20;
console.log(user.age);  // still 18

// creating function and accessing object member in function
user.greetings = function() {
    console.log(`Hello User, ${this.name}!`);
}
user.greetings();