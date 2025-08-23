const promise1 = new Promise((resolved, rejected) => {
    // Do some async task
    // DB Calls, cryptography, network

    setTimeout(function(){
        console.log("Async task completed");
        resolved();
    }, 1000)
})

promise1.then(function(){
    console.log("Promise consumed");
})

new Promise((done, rejected) => {
    // console.log("Hello");
    // done();

    setTimeout(function(){
        console.log("Async task 2 completed")
        done()
    }, 1000)

}).then(() => {
    console.log("resolved");
})

const promise3 = new Promise((resolve, rejected) => {
    setTimeout(function(){
        console.log("Hello from Async function 3")
        resolve("Ansh");
    }, 1000)
})

promise3.then(function(name){
    console.log("Hello " + name);
})

const promise4 = new Promise((resolve, rejected) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      console.log("There's no error, Task 4 done!");
      resolve();
    } else {
      rejected("ERROR Occured in task 4");
    }
  }, 1000);
});

promise4
  .then(function () {
    console.log("4th resolved");
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("4th Promise Finally completed!");
  });

const promise5 = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      console.log("Async 5 completed");
      resolve();
    } else {
      reject("Error found in 5th task!");
    }
  }, 1500);
});

async function consumePromiseFive(){
    try{
        const response = await promise5;
        console.log("5th Resolved!");
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive();

async function getAllUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
    } catch(error){
        console.log("Error: " + error);
    }
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("E: " + error);
  });
