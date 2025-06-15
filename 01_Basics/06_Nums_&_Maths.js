// const num1 = 99
// const num2 = String(num1) // Conversion into string
// // const num2 = new String(num1) // Conversion into string Object

// console.log(num1);
// console.log(num2);

// console.log(typeof num1);
// console.log(typeof num2);

// const num3 = 58.66539
// console.log(num3.toPrecision(3));       // 58.7

// console.log(num3.toString().length);    // 8
// console.log(num3.toFixed(2));           // 58.67

// const num4 = 100000000
// console.log(num4.toString());           // 100000000
// console.log(num4.toLocaleString());     // 10,00,00,000

// ------------------------ MATHS -------------------------- //

// console.log(Math);
// console.log(Math.abs(-4)); // absolute converts any negative value to positive value
// console.log(Math.round(5.7)); // 6
// console.log(Math.ceil(5.7)); // 6
// console.log(Math.floor(5.7)); // 5

// /* Math.ceil(x) → Returns the smallest integer greater than or equal to x.
// Math.floor(x) → Returns the largest integer less than or equal to x. */

// console.log(Math.min(5, 7, 1.1, 1.01, 3)); // 1.01
// console.log(Math.max(5, 7, 1.1, 1.01, 3)); // 7

/* min and max can be used to find the minimum and maximum number in array or sequence of numbers */

// console.log(Math.random()); // Generates random DECIMAL between 0 to 1
// console.log(Math.random()*10);  // Generates random DECIMAL between 0 to 10
// console.log(Math.random()*10 + 1); // Generates random DECIMAL between 1 to 10
// console.log(Math.floor(Math.random()*10 + 1));  // Generates random INTEGER b/w 1 to 10

// For generating random values between desired range (like 10 to 20 here)
const min = 10
const max = 20
    
console.log(Math.floor(Math.random()* (max - min + 1)) + min);

/* 
Math.random()

Returns a random decimal between 0 (inclusive) and 1 (exclusive).
Example: 0.0 <= Math.random() < 1

Math.random() * (max - min + 1)

This scales the random number to the desired range size.

In this case, (20 - 10 + 1) = 11, so now:
0 <= result < 11 (e.g., could be 0.1234, 5.6789, etc.)

Math.floor(...)

Converts that decimal into an integer from 0 to 10.

+ min

Shifts the range from 0–10 to 10–20.
So final values: 10, 11, ..., 20
*/