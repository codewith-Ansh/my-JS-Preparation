// this keyword

const obj = {
    username: "Ansh",
    email: "ansh111@gmail.com",
    password: "65568855",
    
    welcomeMsg: function()
    {
        // console.log(`${this.username}, welcome`)
        console.log(this);
    }
}

obj.welcomeMsg()    // Ansh, welcome
obj.username = "Jay";
obj.welcomeMsg()    // Jay, welcome

/* NOTE: Inside an object method, this refers to the object the method belongs to. */

console.log(this)   // {}

// this in function
function chai() {
    let username = "Ansh"
    console.log(this.username); // undefined  Because 'this' refers to the global object (window or undefined), but 'username' is a local variable, not a property of 'this'
}
chai()

// arrow functions (another way of declaration)
// const addTwoNumbers = (num1, num2) => { 
//     return num1 + num2
// }
const addTwoNumbers = (num1, num2) => (num1 + num2)
console.log(addTwoNumbers(5, 10))   // 15 

const demoFunction = () => {username: "Ansh"}   // we can not return object by just {} we need () to return something
console.log(demoFunction());    // undefined

const demoFunction1 = () => ({username: "Ansh"})
console.log(demoFunction1());   // { username: 'Ansh' }