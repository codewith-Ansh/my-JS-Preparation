// let myDate = new Date()

// console.log(typeof (myDate));               // object
// console.log(myDate);                        // 2025-06-15T12:07:40.110Z
// console.log(myDate.toString());             // Sun Jun 15 2025 17:37:40 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());         // Sun Jun 15 2025
// console.log(myDate.toISOString());          // 2025-06-15T12:07:40.110Z
// console.log(myDate.toJSON());               // 2025-06-15T12:07:40.110Z
// console.log(myDate.toLocaleString());       // 15/6/2025, 5:37:40 pm
// console.log(myDate.toLocaleDateString());   // 15/6/2025

// // We can also declare a date like this
// let newDate = new Date(2023, 2, 25, 5, 2, 59)
// console.log(newDate.toLocaleString());         // 25/3/2023, 5:02:59 am
/* NOTE: In JS, Months starts from 0 and goes to 11, ∴ 0 mean January and 11 means December */

// We can also define Date in "MM-DD-YYYY" or "YYYY-MM-DD" Format where 1 means Jan and 12 means Dec
// let anotherDate = new Date("06-15-2025")
// console.log(anotherDate.toLocaleString()); // 15/6/2025

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
/* Date.now() returns the number of milliseconds that have passed since 
January 1, 1970, 00:00:00 UTC — also called the Unix Epoch. */

// console.log(Math.floor(myTimeStamp/1000)); // Returns seconds
/* We can compare dates by using Date.now() which returns milliseconds */

// console.log(newDate.getTime()) // returns the milliseconds since started from Epoch time
// console.log(newDate.getMonth()) // returns the month
// console.log(newDate.getDay()) // returns the Day

newDate.toLocaleString('default', {
    weekday: "long",
})