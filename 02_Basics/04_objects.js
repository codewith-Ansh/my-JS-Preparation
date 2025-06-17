// ----- Constructor call -----
// const user = new Object()

const user = {}
// console.log(user);

user.id = 202020
user.name = "Ansh Darji"
user.isLoggedIn = false
console.log(user);

const regularUser = {
    email: "user123@gmail.com",
    fullName: {
        userFullName:{
            firstname: "Jay",
            lastname: "Parmar"
        }
    }
}
console.log(regularUser.fullName.userFullName);             // { firstname: 'Jay', lastname: 'Parmar' }
console.log(regularUser.fullName.userFullName.firstname);   // Jay

// Merging objects by using assign() function

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};
const obj3 = {obj1, obj2};
console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign(obj1, obj2);
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
/* NOTE: Object.assign(target, source) copies all enumerable properties from source to 
   target and returns the updated target. 
*/

console.log(obj1);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
/* NOTE: Object.assign() mutates the first parameter (i.e., obj1), which becomes the target
   object. */

const obj5 = {1: 'a', 2: 'b'};
const obj6 = {3: 'a', 4: 'b'};
const obj7 = Object.assign({}, obj5, obj6)  // It copies objects and merge them into empty {}, better practice for using assign()

console.log(obj7)   // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj5)   // Remains as it is - { '1': 'a', '2': 'b' }

// Accessing the keys and values individually

/* user.id = 202020
user.name = "Ansh Darji"
user.isLoggedIn = false */
console.log(Object.keys(user))      // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(user));   // [ 202020, 'Ansh Darji', false ]
console.log(Object.entries(user))   // [ [ 'id', 202020 ], [ 'name', 'Ansh Darji' ], [ 'isLoggedIn', false ] ]
console.log(user.hasOwnProperty('isLoggedIn')); // true
console.log(user.hasOwnProperty('isLogged')); // false


// ----- de-structure of object -----

const course = {
    courseName: "JS in Hindi",
    coursePrice: 999,
    courseInstructor: "Hitesh Chaudhary",
}

console.log(course.courseInstructor); // Normal way to print the member of an object

// destructure
const {courseInstructor} = course;
console.log(courseInstructor);        // Hitesh Chaudhary
// or
const {courseInstructor: Instructor} = course;
console.log(Instructor);              // Hitesh Chaudhary

// API and JSON Brief introduction

/*
    {
        "name": "Ansh Darji",
        "course name": "JS in Hindi",
        "course price": "free",
    }
*/
// --- or it also look likes.. ---
/*
    [
        {},
        {},
        {}
    ]
*/

/* 
-> API (Application Programming Interface):
A set of rules that allows different software or apps to communicate and share data with
each other.

-> JSON (JavaScript Object Notation):
A lightweight data format used to store and exchange data, especially between a server
and a web application.
*/