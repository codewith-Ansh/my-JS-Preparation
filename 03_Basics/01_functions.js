// ------- function creation ------- //
function addTwoNumbers(number1, number2) {  // normal function with arguement
    console.log(number1 + number2);
}

addTwoNumbers()         // NaN
addTwoNumbers(5, 10)    // 15
addTwoNumbers(5, "10")  // 510
addTwoNumbers(5, "A")   // 5A

function addNumbers(number1, number2) {     // function with return value
    let sum = number1 + number2;
    return sum;
}

let result = addNumbers(5, 20)
console.log("Result: ", result);    // 25

function userLoginMsg(username) {           // function accepting string values
    return `${username} just logged in!`;
}

// userLoginMsg("Ansh") // nothing will be printed because the function is returning some value
console.log(userLoginMsg("Ansh"));  // Ansh just logged in!


// passing object as arguement
const user = {
    username: "Anshkumar Darji",
    id: 22
}
function userFunction(anyObject) {
    console.log(`Username is ${anyObject.username} and User id is ${anyObject.id}!`);
}

userFunction(user); // Username is Anshkumar Darji and User id is 22!
userFunction({
    username: "Jay",
    id: 9
})      // Username is Jay and User id is 9!


// default value and rest operator

function demo(value= 100) {
    console.log(value);
}
demo(500)   // 500
demo()      // 100 (default value)

// ... Operator is known as rest operator
function normalFunction(...number) {
    return number
}
console.log(normalFunction(50, 100, 500));  // [ 50, 100, 500 ]

function normalFunction2 (value1, value2, ...number) {
    return number
}
console.log(normalFunction2(50, 100, 500, 1000));  // [ 500, 1000 ]

/* NOTE: The rest operator (...) gathers multiple elements into a single array, often used 
in function parameters or destructuring. */