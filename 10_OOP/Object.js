// String and arrays are also Object in javascript
// Every object in JavaScript has an internal link to another object called its prototype

function createUser(name, score){
    this.name = name;
    this.score = score;
}

// prototype is a place to define shared methods so all objects don’t duplicate them.
createUser.prototype.increaseScore = function(score){
    this.score += score;
    return this.score;
}

// const user1 = createUser("Ansh", 25);
const user2 = new createUser("Vraj", 22);

// new keyword Creates a new object, sets this, links prototype, and returns it.

// console.log(user1.name); // Throws an error as it is not declared with new keyword and may not have prototype

console.log(user2);

console.log(user1.increaseScore(15));   // does not prints anything 
console.log(user2.increaseScore(15));


// -------------------------------------------------------------------------------------------------
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/