// for in loop
const myObj2 = {
    "veg 1": "Potato",
    "veg 2": "Tomato",
    "veg 3": "Brinjal"
} 
for (const key in myObj2) {
    console.log(`${key}:- ${myObj2[key]}`);   
}

// for in loop for array
const arr = ["js", "py", "go", "ts", "c++"];
for (const key in arr) {
    console.log(key);   // 0 1 2 3 4
    // these are the keys 
}
for (const key in arr) {
    console.log(arr[key]);  // js py go ts c++
    // these are the values
}

// for in loop for MAP
const myObj1 = new Map();
myObj1.set("IN", "India");
myObj1.set("US", "United States");
myObj1.set("FR", "France");

// in MAP for in loop will not work
for (const key in myObj1) {
    console.log(key);
}       