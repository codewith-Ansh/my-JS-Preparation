// while loop
let index = 1;
while(index <= 10){
    console.log(index*10);      // 10 20 30 40 50 60 70 80 90 100
    index++;
}

// array in while loop
let myArray = ["Ansh", "Dhaval", "Jay", "Yash"];
let i = 0;

while(i < myArray.length){
    console.log(myArray[i]);    // Ansh Dhaval Jay Yash
    i++;
}

// do while loop
let score = 5;
do{
    console.log(`Score: ${score}`);
    score = score + 5;
}while(score <= 50)