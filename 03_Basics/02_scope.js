if(true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a); // Error
// console.log(b); // Error
console.log(c); // 30

// Global VS Local Scope
let d = 25
const e = 35
var f = 45

if(true) {
    let d = 250
    const e = 350
    var f = 450

    console.log("INNER VALUES-", "d: ", d, ", e: ", e, ", f: ", f);
    // Output: INNER VALUES- d:  250 , e:  350 , f:  450
}

console.log("OUTER VALUES-", "d: ", d, ", e: ", e, ", f: ", f);
// Output: OUTER VALUES- d:  25 , e:  35 , f:  450

// --- Scope in Functions ---

function one() {
    const value1 = 50;
    function two() {
        const value2 = 100;
        console.log("value1 = ", value1, ",Value2 = ", value2); // value1 =  50 ,Value2 =  100
    }
    // console.log("value2 = ", value2); // Error because value2 has block scope inside only function two()
    two();
}
one();


/* NOTE: Function declarations work even before they are written, but function
   expressions don’t. */ 

console.log(addOne(5))  // 6 

function addOne(number){
    return number + 1;
}

// console.log(addTwo(5))  // Error

const newNumber = function addTwo(number){
    return number + 2;
}