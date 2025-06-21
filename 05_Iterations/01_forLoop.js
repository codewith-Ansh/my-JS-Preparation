// for loop
let element = 5;
for (let i = 1; i < 10; i++) {
    console.log(element, " * ", i, " = ",  element*i);
}

// nested for loop
for(let i=1; i<=5; i++){
    console.log("--- Outer loop: ", i, "---");
    for(let j=1; j<=5; j++){
        console.log("Inner loop: ", j);
    }
}

// array in for loop
let myArray = ["Ansh", "Dhaval", "Jay", "Yash"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and continue in loop
for (let i = 0; i < 10; i++) {
    if(i == 4)
        continue;           // 4 skipped
    if(i == 8)
        break;              // loop will stop 8

    console.log(i);         // 0 1 2 3 5 6 7
}