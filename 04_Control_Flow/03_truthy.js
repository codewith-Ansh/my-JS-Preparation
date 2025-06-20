// falsy values
/* NOTE: false, 0, -0, 0n (BigInt), "", '', null, undefined, NaN
 Every values other than these above values are considered as an true value */

// Truthy values
/* NOTE: "0", "false", [], {}, function(){}, Infinity, -Infinity, new Boolean(false),
   new String(""), new Number(0)
*/

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const emptyObj = {
    name: "Ansh Darji",
}

if (Object.keys(emptyObj).length === 0)
    console.log("Object is empty");
else
    console.log("Object is not empty");


// Nullish Coalescing Operator (??): null undefined
// Use ?? when you want to provide a default only for null or undefined

let val1;
// val1 = 5 ?? 10           // 5
// val1 = null ?? 10        // 10
// val1 = undefined ?? 15   // 15
val1 = null ?? 10 ?? 20     // 10

console.log(val1);

// Ternary operator ?:

const isTrue = false;
(isTrue)? console.log("True") : console.log("False");