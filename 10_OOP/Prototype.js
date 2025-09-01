const myName = "Ansh       ";
const myId = "24CE022         ";

// console.log(myName.length);
// console.log(myName.trim().length);

let heroes = ["thor", "spiderman", "ironman"];
// console.log(heroes);

const myObj = {
    name: "Ansh",
    age: 19,

    greeting: function(){
        console.log(`Hello ${this.name}`);
    }
}

Object.prototype.music = function(){
    console.log("Playing music");
}

Array.prototype.musicArray = function(){
    console.log("Playing music in Array");
}

console.log(myObj);
console.log(myObj.music());

console.log(heroes);
console.log(heroes.musicArray());



const User = {
    name: "ansh",
    email: "ansh@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Ansh Darji     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Jayesh".trueLength()
"HotCoffee".trueLength()