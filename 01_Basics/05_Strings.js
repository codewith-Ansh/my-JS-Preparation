let name = "Ansh Darji"
let age = 19

console.log(`Hello my name is ${name} and my age is ${age}`);  // ${} is used for printing the values of variable

let gameName = new String('Mario')
console.log(gameName[0]); // M
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 5
console.log(gameName.charAt(2)); // r

console.log(gameName.toUpperCase()); // MARIO
console.log(gameName.toLowerCase()); // mario

console.log(gameName.indexOf('M')); // 0

const newString = gameName.substring(0,3)
console.log(newString); // Mar

// const anotherString = gameName.slice(0,3)
// console.log(anotherString); // Mar 

/* difference between slice and substring is that we can use negative values in slice while can't in substring */


const anotherString = gameName.slice(-4 ,3) // ar
console.log(anotherString);

const url = "https://ansh%20darji.com"
console.log(url.replace('%20', '-')); // https://ansh-darji.com

const pass = '  abcd     '
console.log(pass); // '  abcd     '
console.log(pass.trim()); // abcd

// trim removes the spaces