// let score = "33abc"
// console.log(typeof score); // string
// let value = Number(score) // Conversion of string to number
// console.log(typeof value);  // Number
// console.log(value); // NaN (Not a Number)
// console.log("")


// let score2 = null
// console.log(typeof score2); // object
// let value2 = Number(score2) // Conversion of string to number
// console.log(typeof value2);  // Number
// console.log(value2); // 0
// console.log("")


// let someNumber = 33
// console.log(someNumber);
// let value3 = String(someNumber)
// console.log(typeof value3)


/* ------ Operations ------ */
// let value = 45
// let negValue = -value
// console.log(value)
// console.log(negValue)

// console.log(5 + 2)  // Addition
// console.log(5 - 2)  // Subtraction
// console.log(5 * 2)  // Multiplication
// console.log(5 / 2)  // Divison
// console.log(5 % 2)  // Remainder
// console.log(5 ** 2) // power


// ------ Concatenation ------- //
// let str1 = "Ansh"
// let str2 = " Darji"
// let str3 = str1 + str2
// console.log(str3)


// console.log(1 + 2 + 2) // 5
// console.log(1 + 2 + "2") // 32
// console.log("1" + 2 + 2) // 122
// console.log(1 + "2" + 2) // 122
// console.log(1 + 2 + "2" + "3") // 323

/*
During calculations, if a string is placed at the beginning or in the middle, 
the output will be a concatenation with the other values. 
But if the string appears at the end, the calculation is performed first, 
and then the result is concatenated as a string. 
*/

console.log(+true) // 1
// console.log(true+) // Error
console.log(+false) // 0
// console.log(false+) // Error

let num1 = num2 = num3 = 2+2
console.log(num1, num2, num3) // 4 4 4

let gameCounter = 100;
console.log(gameCounter++); // 100 (Increment after task is done) 100+1 = 101
console.log(++gameCounter); // 102 (Increment before task is done) 101 + 1