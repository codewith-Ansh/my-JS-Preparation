// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 <= 2)
// console.log(2 == 1)
// console.log(2 != 1)
// console.log(2 >= 2)

// console.log("2" <= 2)    // Type conversion (String to number)
// console.log("1" >= 2) 

// console.log(null > 0)    // false
// console.log(null < 0)    // false
// console.log(null >= 0)   // true
// console.log(null <= 0)   // true
// console.log(null == 0)   // true

/* The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That’s why (3) null >= 0 is true and (1) null > 0 is false. */

// console.log(undefined > 0)  // false
// console.log(undefined < 0)  // false
// console.log(undefined <= 0) // false
// console.log(undefined >= 0) // false
// console.log(undefined == 0) // false
/* false every time due to no type conversions */

console.log("2" === 2)  // false
/* because === (strict equality) checks both value and type without converting types,
while == checks only value after type conversion. */