// for of loop

const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
    console.log(i);
}

const greetings = "Namaste Bharat!";
let i = 1;
for (const greet of greetings) {
    console.log("Character " + i + ": " + greet);
    i++;
}

// for of loop for map
// The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys.
const myObj1 = new Map();
myObj1.set("IN", "India");
myObj1.set("US", "United States");
myObj1.set("FR", "France");

for (const [key, value] of myObj1) {
    console.log(key, ":-", value);
}

const myObj2 = {
    "veg 1": "Potato",
    "veg 2": "Tomato",
    "veg 3": "Brinjal"
} 
// for (const [key, value] of myObj2) {
//     console.log(key, ":-", value);      // TypeError: myObj2 is not iterable
// }

/* NOTE: Map is iterable with for...of, while plain objects ({}) are not directly
iterable with for...of.*/