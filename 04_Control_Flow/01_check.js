// comparision operators
//  <, >, <=, >=, ==, !=, ===, !==

// if else

if("2"==2)                  // True - normal checking
    console.log("True");
else
    console.log("False");
    
if("2"===2)                  // False - strict checking
    console.log("True");
else
    console.log("False");

// else if

const balance = 1000;
if(balance < 500)
    console.log("Balance is less than 500");
else if(balance < 750)
    console.log("Balance is less than 750");
else if(balance < 1000)
    console.log("Balance is less than 1000");
else
    console.log("Balance is greater than or equal to 1000");